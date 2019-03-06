import React, { Component } from 'react';
import '@firebase/firestore'
import { withFirebase } from '../Firebase';
import ScoutIndividualProspect from './ScoutIndividualProspect'

const SendScoutsPage = ({firebase}) => (
  <div>
    <h1>Scouting Headquarters</h1>
    <SendScoutsList firebase={firebase}/>
  </div>
);

class SendScouts extends React.Component{
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: "",
      scoutPoints: 0,
      teamName: "",
      scoutList: [],
      uniqueId: ""
    };
    this.saveScouts = this.saveScouts.bind(this);
  }
  saveScouts() {
    console.log("Scouts saved!");
    var prospectsSelected = document.getElementsByClassName('selection');
    let list = [];
    let first = "";
    let last = "";
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
        url: selectedText.toLowerCase().replace(/[, ']+/g, "").trim()
      };
      list.push(prospect);
    }
    console.log(list);
    this.setState({
      scoutList: list
    });

    var userEmail = this.props.firebase.auth.currentUser.email;

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    var franchiseRef = db.collection("franchises").doc(this.state.uniqueId);
    return franchiseRef.update({
    scoutList: list
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
          scoutPoints: doc.data().availableScouts,
          teamName: doc.data().team,
          scoutList: doc.data().scoutList,
          uniqueId: doc.id
        });
      });
    });
  }
  render(){
    var selectProspects = [];

    const currentScoutList = (
      <div>
        <ul>
          {this.state.scoutList.map((person, index) => (
              <li key={index}>{person.first} {person.last}</li>
          ))}
        </ul>
      </div>
    );

    for (var i = 0; i < this.state.scoutPoints; i++) {
      selectProspects.push(<ScoutIndividualProspect key={i} />);
    }

    return (
      <div>
        <h3>{this.state.teamName}</h3>
        <h6>Scouts Available: {this.state.scoutPoints}</h6>
        <h4>Currently Scouting:</h4>
        {currentScoutList}

        <p>Clicking the save button below will overwrite the saved scouts listed above.</p>

        {selectProspects}
        <br />
        <button onClick={this.saveScouts} className='btn'>Save Scouts</button>
      </div>
    );
  }
};

export default SendScoutsPage;

const SendScoutsList = withFirebase(SendScouts);

export {SendScoutsList};
