import React, { Component } from 'react';
import '@firebase/firestore'
import { withFirebase } from '../Firebase';
import ScoutIndividualProspect from '../SendScouts/ScoutIndividualProspect'

const InterviewsPage = ({firebase}) => (
  <div>
    <h1>Set Interviews</h1>
    <ScheduleInterviewsList firebase={firebase}/>
  </div>
);

class ScheduleInterviews extends React.Component{
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: "",
      interviewPoints: 10,
      teamName: "",
      interviewList: [],
      uniqueId: ""
    };
    this.ScheduleInterviews = this.ScheduleInterviews.bind(this);
  }
  ScheduleInterviews() {
    console.log("Interviews scheduled!");
    var prospectsSelected = document.getElementsByClassName('selection');
    let list = [];
    let first = "";
    let last = "";
    let year = 2024;
    for (var i = 0; i < prospectsSelected.length; i++){
      if (prospectsSelected[i].selectedOptions[0].text.indexOf(',') != -1) {
        var segments = prospectsSelected[i].selectedOptions[0].text.split(',');
        last = segments[0];
        first = segments[1];
      }

      let selectedText = prospectsSelected[i].selectedOptions[0].text;
      let prospect = {
        first: first,
        last: last,
        url: selectedText.toLowerCase().replace(/[, ']+/g, "").trim(),
        year: year
      };
      list.push(prospect);
    }
    console.log(list);
    this.setState({
      interviewList: list
    });

    var userEmail = this.props.firebase.auth.currentUser.email;

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    var franchiseRef = db.collection("franchises").doc(this.state.uniqueId);
    return franchiseRef.update({
      interviewList: list
    })
    .then(function() {
      console.log("Document successfully updated!");
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
  }
  componentDidMount() {
    var userEmail = this.props.firebase.auth.currentUser.email;

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();


    db.collection("franchises").where("email", "==", userEmail)
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        console.log(doc.id);
        this.setState({
          email: doc.data().email,
          teamName: doc.data().team,
          uniqueId: doc.id,
          interviewList: doc.data().interviewList
        });
      });
    });
  }
  render(){
    var selectProspects = [];

    const currentInterviewList = (
      <div>
        <ul>
          {this.state.interviewList.map((person, index) => (
              <li key={index}>{person.first} {person.last}</li>
          ))}
        </ul>
      </div>
    );

    for (var i = 0; i < this.state.interviewPoints; i++) {
      selectProspects.push(<ScoutIndividualProspect key={i} />);
    }

    return (
      <div>
        <h3>{this.state.teamName}</h3>
        <h6>Interviews Available: {this.state.interviewPoints}</h6>
        <hr></hr>
        <p className='text-center'>Clicking the save button below will overwrite the saved interviews listed above.</p>
        <button className='text-center' onClick={this.ScheduleInterviews} className='btn ScheduleInterviewsBtn'>Schedule Interviews</button>
        <hr></hr>
        <div className="row">
          <div className="col-sm-6">
            <h5>Currently Interviewing:</h5>
            {currentInterviewList}
          </div>
          <div className="col-sm-6 text-center">
            <h5>Choose Different Prospects to Interview</h5>
            {selectProspects}
          </div>
        </div>
      </div>
    );
  }
};

export default InterviewsPage;

const ScheduleInterviewsList = withFirebase(ScheduleInterviews);

export {ScheduleInterviewsList};
