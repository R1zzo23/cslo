import React from 'react';
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
    var prospectsSelected = document.getElementsByClassName('selection');
    let year = 2035;
    let list = [];
    let first = "";
    let last = "";
    for (var i = 0; i < prospectsSelected.length; i++){
      if (prospectsSelected[i].selectedOptions[0].text.indexOf(',') !== -1) {
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
    this.setState({
      scoutList: list
    });

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    var franchiseRef = db.collection("franchises").doc(this.state.uniqueId);
    return franchiseRef.update({
    scoutList: list
    })
    .then(function() {
    })
    .catch(function(error) {
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
        <hr></hr>
        <p className='text-center'>Clicking the save button below will overwrite the saved scouts listed above.</p>
        <button className='text-center' onClick={this.saveScouts} className='btn saveScoutsBtn'>Save Scouts</button>
        <hr></hr>
        <div className="row">
          <div className="col-sm-6">
            <h5>Currently Scouting:</h5>
            {currentScoutList}
          </div>
          <div className="col-sm-6 text-center">
            <h5>Choose Different Prospects to Scout</h5>
            {selectProspects}
          </div>
        </div>
      </div>
    );
  }
};

export default SendScoutsPage;

const SendScoutsList = withFirebase(SendScouts);

export {SendScoutsList};
