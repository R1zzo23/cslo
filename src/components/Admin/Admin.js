import React, { Component } from 'react'
import '@firebase/firestore'
import { withFirebase } from '../Firebase'

const AdminPage = ({firebase}) => (
  <div>
    <h1>Admin Page</h1>
    <Admininstration firebase={firebase}/>
  </div>
);

class Admin extends React.Component{
  constructor(props: IProps) {
    super(props);
    this.state = {

    };
    this.runScouts = this.runScouts.bind(this);
  }
  componentDidMount() {

  }
  runScouts() {
    console.log("Running scouts...");

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    // grab collection that holds all franchises
    db.collection("franchises").get().then(function(querySnapshot) {
      querySnapshot.docs.map(function(teamDoc) {
        // grab scoutList array for current team
        let scoutList = teamDoc.data().scoutList;
        // grab email for current franchise
        let email = teamDoc.data().email;
        let abrev = teamDoc.data().abrev;
        // use url property of each element in array to find doc in class2024 collection
        scoutList.forEach(function(prospect) {
          let docRef = db.collection('class2024').doc(prospect.url);
          docRef.get().then(function(doc) {
            // create new doc in scouts collection with randomized ratings based on referenced docs
            let fullNameLowerCase = (doc.data().LastName + doc.data().FirstName).toLowerCase();
            let scoutedConsistency = Math.floor(Math.random()*((doc.data().Consistency + 5)-(doc.data().Consistency-5)+1))+(doc.data().Consistency-5);
            if (scoutedConsistency > 99) scoutedConsistency = 99;
            let scoutedGreed = Math.floor(Math.random()*((doc.data().Greed + 5)-(doc.data().Greed-5)+1))+(doc.data().Greed-5);
            if (scoutedGreed > 99) scoutedGreed = 99;
            let scoutedLoyalty = Math.floor(Math.random()*((doc.data().Loyalty + 5)-(doc.data().Loyalty-5)+1))+(doc.data().Loyalty-5);
            if (scoutedLoyalty > 99) scoutedLoyalty = 99;
            let scoutedPlayForWinner = Math.floor(Math.random()*((doc.data().PlayForWinner + 5)-(doc.data().PlayForWinner-5)+1))+(doc.data().PlayForWinner-5);
            if (scoutedPlayForWinner > 99) scoutedPlayForWinner = 99;
            let scoutedPlayingTime = Math.floor(Math.random()*((doc.data().PlayingTime + 5)-(doc.data().PlayingTime-5)+1))+(doc.data().PlayingTime-5);
            if (scoutedPlayingTime > 99) scoutedPlayingTime = 99;
            let scoutedPersonality = Math.floor(Math.random()*((doc.data().Personality + 5)-(doc.data().Personality-5)+1))+(doc.data().Personality-5);
            if (scoutedPersonality > 99) scoutedPersonality = 99;
            let scoutedDurability = Math.floor(Math.random()*((doc.data().Durability + 5)-(doc.data().Durability-5)+1))+(doc.data().Durability-5);
            if (scoutedDurability > 99) scoutedDurability = 99;
            let scoutedWorkEthic = Math.floor(Math.random()*((doc.data().WorkEthic + 5)-(doc.data().WorkEthic-5)+1))+(doc.data().WorkEthic-5);
            if (scoutedWorkEthic > 99) scoutedWorkEthic = 99;
            let scoutedDunkRate = Math.floor(Math.random()*((doc.data().DunkRate + 2)-(doc.data().DunkRate-2)+1))+(doc.data().DunkRate-2);
            if (scoutedDunkRate > 99) scoutedDunkRate = 99;
            let scoutedRARate = Math.floor(Math.random()*((doc.data().RARate + 2)-(doc.data().RARate-2)+1))+(doc.data().RARate-2);
            if (scoutedRARate > 99) scoutedRARate = 99;
            let scoutedFG_RA = Math.floor(Math.random()*((doc.data().FG_RA + 2)-(doc.data().FG_RA-2)+1))+(doc.data().FG_RA-2);
            if (scoutedFG_RA > 99) scoutedFG_RA = 99;
            let scoutedFG_ITP = Math.floor(Math.random()*((doc.data().FG_ITP + 2)-(doc.data().FG_ITP-2)+1))+(doc.data().FG_ITP-2);
            if (scoutedFG_ITP > 99) scoutedFG_ITP = 99;
            let scoutedFG_MID = Math.floor(Math.random()*((doc.data().FG_MID + 2)-(doc.data().FG_MID-2)+1))+(doc.data().FG_MID-2);
            if (scoutedFG_MID > 99) scoutedFG_MID = 99;
            let scoutedFG_COR = Math.floor(Math.random()*((doc.data().FG_COR + 2)-(doc.data().FG_COR-2)+1))+(doc.data().FG_COR-2);
            if (scoutedFG_COR < 0) scoutedFG_COR = 0;
            if (scoutedFG_COR > 99) scoutedFG_COR = 99;
            let scoutedFG_ATB = Math.floor(Math.random()*((doc.data().FG_ATB + 2)-(doc.data().FG_ATB-2)+1))+(doc.data().FG_ATB-2);
            if (scoutedFG_ATB < 0) scoutedFG_ATB = 0;
            if (scoutedFG_ATB > 99) scoutedFG_ATB = 99;
            let scoutedFT = Math.floor(Math.random()*((doc.data().FT + 2)-(doc.data().FT-2)+1))+(doc.data().FT-2);
            if (scoutedFT > 99) scoutedFT = 99;
            let scoutedFG_RA_POT = Math.floor(Math.random()*((doc.data().FG_RA_POT + 2)-(doc.data().FG_RA_POT-2)+1))+(doc.data().FG_RA_POT-2);
            if (scoutedFG_RA_POT < scoutedFG_RA) scoutedFG_RA_POT = scoutedFG_RA;
            if (scoutedFG_RA_POT > 99) scoutedFG_RA_POT = 99;
            let scoutedFG_ITP_POT = Math.floor(Math.random()*((doc.data().FG_ITP_POT + 2)-(doc.data().FG_ITP_POT-2)+1))+(doc.data().FG_ITP_POT-2);
            if (scoutedFG_ITP_POT < scoutedFG_ITP) scoutedFG_ITP_POT = scoutedFG_ITP;
            if (scoutedFG_ITP_POT > 99) scoutedFG_ITP_POT = 99;
            let scoutedFG_MID_POT = Math.floor(Math.random()*((doc.data().FG_MID_POT + 2)-(doc.data().FG_MID_POT-2)+1))+(doc.data().FG_MID_POT-2);
            if (scoutedFG_MID_POT < scoutedFG_MID) scoutedFG_MID_POT = scoutedFG_MID;
            if (scoutedFG_MID_POT > 99) scoutedFG_MID_POT = 99;
            let scoutedFG_COR_POT = Math.floor(Math.random()*((doc.data().FG_COR_POT + 2)-(doc.data().FG_COR_POT-2)+1))+(doc.data().FG_COR_POT-2);
            if (scoutedFG_COR_POT < 0) scoutedFG_COR_POT = 0;
            if (scoutedFG_COR_POT < scoutedFG_COR) scoutedFG_COR_POT = scoutedFG_COR;
            if (scoutedFG_COR_POT > 99) scoutedFG_COR_POT = 99;
            let scoutedFG_ATB_POT = Math.floor(Math.random()*((doc.data().FG_ATB_POT + 2)-(doc.data().FG_ATB_POT-2)+1))+(doc.data().FG_ATB_POT-2);
            if (scoutedFG_ATB_POT < 0) scoutedFG_ATB_POT = 0;
            if (scoutedFG_ATB_POT < scoutedFG_ATB) scoutedFG_ATB_POT = scoutedFG_ATB;
            if (scoutedFG_ATB_POT > 99) scoutedFG_ATB_POT = 99;
            let scoutedFT_POT = Math.floor(Math.random()*((doc.data().FT_POT + 2)-(doc.data().FT_POT-2)+1))+(doc.data().FT_POT-2);
            if (scoutedFT_POT < scoutedFT) scoutedFT_POT = scoutedFT;
            if (scoutedFT_POT > 99) scoutedFT_POT = 99;
            let scoutedScoring = Math.floor(Math.random()*((doc.data().Scoring + 5)-(doc.data().Scoring-5)+1))+(doc.data().Scoring-5);
            if (scoutedScoring > 99) scoutedScoring = 99;
            let scoutedPassing = Math.floor(Math.random()*((doc.data().Passing + 5)-(doc.data().Passing-5)+1))+(doc.data().Passing-5);
            if (scoutedPassing > 99) scoutedPassing = 99;
            let scoutedHandling = Math.floor(Math.random()*((doc.data().Handling + 5)-(doc.data().Handling-5)+1))+(doc.data().Handling-5);
            if (scoutedHandling > 99) scoutedHandling = 99;
            let scoutedOReb = Math.floor(Math.random()*((doc.data().OReb + 5)-(doc.data().OReb-5)+1))+(doc.data().OReb-5);
            if (scoutedOReb > 99) scoutedOReb = 99;
            let scoutedDReb = Math.floor(Math.random()*((doc.data().DReb + 5)-(doc.data().DReb-5)+1))+(doc.data().DReb-5);
            if (scoutedDReb > 99) scoutedDReb = 99;
            let scoutedBlock = Math.floor(Math.random()*((doc.data().Block + 5)-(doc.data().Block-5)+1))+(doc.data().Block-5);
            if (scoutedBlock > 99) scoutedBlock = 99;
            let scoutedSteal = Math.floor(Math.random()*((doc.data().Steal + 5)-(doc.data().Steal-5)+1))+(doc.data().Steal-5);
            if (scoutedSteal > 99) scoutedSteal = 99;
            let scoutedDrawFoul = Math.floor(Math.random()*((doc.data().DrawFoul + 2)-(doc.data().DrawFoul-2)+1))+(doc.data().DrawFoul-2);
            if (scoutedDrawFoul < 0) scoutedDrawFoul = 0;
            if (scoutedDrawFoul > 99) scoutedDrawFoul = 99;
            let scoutedDefender = Math.floor(Math.random()*((doc.data().Defender + 5)-(doc.data().Defender-5)+1))+(doc.data().Defender-5);
            if (scoutedDefender > 99) scoutedDefender = 99;
            let scoutedDiscipline = Math.floor(Math.random()*((doc.data().Discipline + 5)-(doc.data().Discipline-5)+1))+(doc.data().Discipline-5);
            if (scoutedDiscipline > 99) scoutedDiscipline = 99;
            let scoutedBballIQ = Math.floor(Math.random()*((doc.data().BballIQ + 5)-(doc.data().BballIQ-5)+1))+(doc.data().BballIQ-5);
            if (scoutedBballIQ > 99) scoutedBballIQ = 99;
            let scoutedScoring_POT = Math.floor(Math.random()*((doc.data().Scoring_POT + 15)-(doc.data().Scoring_POT-15)+1))+(doc.data().Scoring_POT-15);
            if (scoutedScoring_POT < scoutedScoring) scoutedScoring_POT = scoutedScoring;
            if (scoutedScoring_POT > 99) scoutedScoring_POT = 99;
            let scoutedPassing_POT = Math.floor(Math.random()*((doc.data().Passing_POT + 15)-(doc.data().Passing_POT-15)+1))+(doc.data().Passing_POT-15);
            if (scoutedPassing_POT < scoutedPassing) scoutedPassing_POT = scoutedPassing;
            if (scoutedPassing_POT > 99) scoutedPassing_POT = 99;
            let scoutedHandling_POT = Math.floor(Math.random()*((doc.data().Handling_POT + 15)-(doc.data().Handling_POT-15)+1))+(doc.data().Handling_POT-15);
            if (scoutedHandling_POT < scoutedHandling) scoutedHandling_POT = scoutedHandling;
            if (scoutedHandling_POT > 99) scoutedHandling_POT = 99;
            let scoutedOReb_POT = Math.floor(Math.random()*((doc.data().OReb_POT + 15)-(doc.data().OReb_POT-15)+1))+(doc.data().OReb_POT-15);
            if (scoutedOReb_POT < scoutedOReb) scoutedOReb_POT = scoutedOReb;
            if (scoutedOReb_POT > 99) scoutedOReb_POT = 99;
            let scoutedDReb_POT = Math.floor(Math.random()*((doc.data().DReb_POT + 15)-(doc.data().DReb_POT-15)+1))+(doc.data().DReb_POT-15);
            if (scoutedDReb_POT < scoutedDReb) scoutedDReb_POT = scoutedDReb;
            if (scoutedDReb_POT > 99) scoutedDReb_POT = 99;
            let scoutedBlock_POT = Math.floor(Math.random()*((doc.data().Block_POT + 15)-(doc.data().Block_POT-15)+1))+(doc.data().Block_POT-15);
            if (scoutedBlock_POT < scoutedBlock) scoutedBlock_POT = scoutedBlock;
            if (scoutedBlock_POT > 99) scoutedBlock_POT = 99;
            let scoutedSteal_POT = Math.floor(Math.random()*((doc.data().Steal_POT + 15)-(doc.data().Steal_POT-15)+1))+(doc.data().Steal_POT-15);
            if (scoutedSteal_POT < scoutedSteal) scoutedSteal_POT = scoutedSteal;
            if (scoutedSteal_POT > 99) scoutedSteal_POT = 99;
            let scoutedDrawFoul_POT = Math.floor(Math.random()*((doc.data().DrawFoul_POT + 2)-(doc.data().DrawFoul_POT-2)+1))+(doc.data().DrawFoul_POT-2);
            if (scoutedDrawFoul_POT < 0) scoutedDrawFoul_POT = 0;
            if (scoutedDrawFoul_POT < scoutedDrawFoul) scoutedDrawFoul_POT = scoutedDrawFoul;
            if (scoutedDrawFoul > 99) scoutedDrawFoul = 99;
            let scoutedDefender_POT = Math.floor(Math.random()*((doc.data().Defender_POT + 15)-(doc.data().Defender_POT-15)+1))+(doc.data().Defender_POT-15);
            if (scoutedDefender_POT < scoutedDefender) scoutedDefender_POT = scoutedDefender;
            if (scoutedDefender_POT > 99) scoutedDefender_POT = 99;
            let scoutedDiscipline_POT = Math.floor(Math.random()*((doc.data().Discipline_POT + 15)-(doc.data().Discipline_POT-15)+1))+(doc.data().Discipline_POT-15);
            if (scoutedDiscipline_POT < scoutedDiscipline) scoutedDiscipline_POT = scoutedDiscipline;
            if (scoutedDiscipline_POT > 99) scoutedDiscipline_POT = 99;
            let scoutedBballIQ_POT = Math.floor(Math.random()*((doc.data().BballIQ_POT + 15)-(doc.data().BballIQ_POT-15)+1))+(doc.data().BballIQ_POT-15);
            if (scoutedBballIQ_POT < scoutedBballIQ) scoutedBballIQ_POT = scoutedBballIQ;
            if (scoutedBballIQ_POT > 99) scoutedBballIQ_POT = 99;
            db.collection('scouts').add({
              FullNameLowerCase: fullNameLowerCase,
              Email: email,
              FirstName: doc.data().FirstName,
              LastName: doc.data().LastName,
              Position: doc.data().Position,
              Age: doc.data().Age,
              CollegeYear: doc.data().CollegeYear,
              Height: doc.data().Height,
              DisplayHeight: doc.data().DisplayHeight,
              Weight: doc.data().Weight,
              College: doc.data().College,
              Consistency: scoutedConsistency,
              Greed: scoutedGreed,
              Loyalty: scoutedLoyalty,
              PlayForWinner: scoutedPlayForWinner,
              PlayingTime: scoutedPlayingTime,
              Personality: scoutedPersonality,
              Durability: scoutedDurability,
              WorkEthic: scoutedWorkEthic,
              DunkRate: scoutedDunkRate,
              RARate: scoutedRARate,
              DriveKick: doc.data().DriveKick,
              DriveShot: doc.data().DriveShot,
              PostUp: doc.data().PostUp,
              PullUp: doc.data().PullUp,
              CS: doc.data().CS,
              Pass: doc.data().Pass,
              LocATB: doc.data().LocATB,
              LocCorner: doc.data().LocCorner,
              LocMidrange: doc.data().LocMidrange,
              LocPaint: doc.data().LocPaint,
              FG_RA: scoutedFG_RA,
              FG_ITP: scoutedFG_ITP,
              FG_MID: scoutedFG_MID,
              FG_COR: scoutedFG_COR,
              FG_ATB: scoutedFG_ATB,
              FT: scoutedFT,
              Scoring: scoutedScoring,
              Passing: scoutedPassing,
              Handling: scoutedHandling,
              OReb: scoutedOReb,
              DReb: scoutedDReb,
              Block: scoutedBlock,
              Steal: scoutedSteal,
              DrawFoul: scoutedDrawFoul,
              Defender: scoutedDefender,
              Discipline: scoutedDiscipline,
              BballIQ: scoutedBballIQ,
              FG_RA_POT: scoutedFG_RA_POT,
              FG_ITP_POT: scoutedFG_ITP_POT,
              FG_MID_POT: scoutedFG_MID_POT,
              FG_COR_POT: scoutedFG_COR_POT,
              FG_ATB_POT: scoutedFG_ATB_POT,
              FT_POT: scoutedFT_POT,
              Scoring_POT: scoutedScoring_POT,
              Passing_POT: scoutedPassing_POT,
              Handling_POT: scoutedHandling_POT,
              OReb_POT: scoutedOReb_POT,
              DReb_POT: scoutedDReb_POT,
              Block_POT: scoutedBlock_POT,
              Steal_POT: scoutedSteal_POT,
              DrawFoul_POT: scoutedDrawFoul_POT,
              Defender_POT: scoutedDefender_POT,
              Discipline_POT: scoutedDiscipline_POT,
              BballIQ_POT: scoutedBballIQ_POT
            })
          });
        });
        // empty scoutList array for this franchise
        console.log("Emptying scoutList array...");
        // availableScouts set to 0
        console.log("availableScouts set to 0...");
        db.collection("franchises").doc(abrev).update({
          scoutList: [],
          availableScouts: 0
        })
        .then(function() {
        console.log("Document successfully updated!");
        });
      });
    });
  }
  render(){
    return (
      <div>
        <button onClick={this.runScouts} className='btn'>Run Scouts</button>
      </div>
    );
  }
};

export default AdminPage;

const Admininstration = withFirebase(Admin);

export {Admininstration};
