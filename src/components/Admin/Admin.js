import React from 'react'
import '@firebase/firestore'
import { withFirebase } from '../Firebase'
import Toggle from 'react-toggle'

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
      articleList: [],
      teamList: [],
      currentUID: ''
    };
    this.runScouts = this.runScouts.bind(this);
    this.runInterviews = this.runInterviews.bind(this);
    this.runCombine = this.runCombine.bind(this);
    this.approveArticle = this.approveArticle.bind(this);
    this.denyArticle = this.denyArticle.bind(this);
    this.runBigBoard = this.runBigBoard.bind(this);
  }
  updateEmails() {
    console.log("updating emails")
    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();
    db.collection("franchises")
    .get()
    .then((doc) => {
      doc.docs.map(function(teamDoc) {
        for (var i = 0; i < this.state.teamList.length(); i++)
        {
          if (teamDoc.data().abrev == this.state.teamList[i].abrev)
          {
            db.collection("franchises").doc(teamDoc).update({
              'email': this.state.teamlist[i].email
            })
          }
        }
      })
    })
  }
  runBigBoard() {
    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    db.collection("class2029")
    .get()
    .then((doc) => {
      doc.docs.map(function(prospectDoc) {
        //get prospect document name
        let first = prospectDoc.data().FirstName;
        let last = prospectDoc.data().LastName;
        let fullName = last + first;
        fullName = fullName.toLowerCase().replace(/[, ']+/g, "").trim();
        //get BigBoardScore
        let bigBoardScore = prospectDoc.data().BigBoardScore;
        //get number of times scouted for prospect
        let timesScouted = prospectDoc.data().TimesScouted;
        //random variation of +-5;
        let variation = Math.floor(Math.random() * (5 - -5) + -5)/100;
        console.log("variation: " + variation);
        let calculatedBigBoardScore = Math.floor((bigBoardScore + (timesScouted * 10)) * (1 + variation));
        db.collection("class2029").doc(fullName).update({
          "CurrentBigBoardScore": calculatedBigBoardScore
        })
      });
    });

    let bigBoardArray = [];
    // grab all scouts for this franchise
    db.collection("class2029")
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        // add each scout to array
        bigBoardArray.push(doc.data());
      });
      // sort scouts array by LastName then FirstName
      bigBoardArray.sort((a, b) => (a.CurrentBigBoardScore < b.CurrentBigBoardScore) ? 1 : (a.CurrentBigBoardScore === b.CurrentBigBoardScore) ? ((a.LastName > b.LastName) ? 1 : -1) : -1 )

      for (let i = 0; i < bigBoardArray.length; i++) {
        //hold info for BigBoardCurrent
        let bigBoardCurrentSpot = bigBoardArray[i].BigBoardCurrent;
        //get prospect document name
        let first = bigBoardArray[i].FirstName;
        let last = bigBoardArray[i].LastName;
        let fullName = last + first;
        fullName = fullName.toLowerCase().replace(/[, ']+/g, "").trim();

        let newBigBoardSpot = i + 1;
        let bigBoardChange =  bigBoardCurrentSpot - newBigBoardSpot;
        if (bigBoardChange > 0) bigBoardChange = "+" + bigBoardChange;

        db.collection("class2029").doc(fullName).update({
          "BigBoardCurrent": newBigBoardSpot,
          "BigBoardLastMonth": bigBoardCurrentSpot,
          "BigBoardChange": bigBoardChange
        });
      }
    });
  }
  runCombine() {
    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    db.collection("class2029").where("Tier", ">", -1)
    .get()
    .then((doc) => {
      doc.docs.map(function(prospectDoc) {
        let fullNameLowerCase = (prospectDoc.data().LastName + prospectDoc.data().FirstName).toLowerCase().replace(/[, '.]+/g, "").trim();
        let scoutedFG_RA = Math.floor(Math.random()*((prospectDoc.data().FG_RA + 4)-(prospectDoc.data().FG_RA-4)+1))+(prospectDoc.data().FG_RA-4);
        if (scoutedFG_RA > 99) scoutedFG_RA = 99;
        let scoutedFG_ITP = Math.floor(Math.random()*((prospectDoc.data().FG_ITP + 4)-(prospectDoc.data().FG_ITP-4)+1))+(prospectDoc.data().FG_ITP-4);
        if (scoutedFG_ITP > 99) scoutedFG_ITP = 99;
        let scoutedFG_MID = Math.floor(Math.random()*((prospectDoc.data().FG_MID + 4)-(prospectDoc.data().FG_MID-4)+1))+(prospectDoc.data().FG_MID-4);
        if (scoutedFG_MID > 99) scoutedFG_MID = 99;
        let scoutedFG_COR = Math.floor(Math.random()*((prospectDoc.data().FG_COR + 4)-(prospectDoc.data().FG_COR-4)+1))+(prospectDoc.data().FG_COR-4);
        if (scoutedFG_COR < 0) scoutedFG_COR = 0;
        if (scoutedFG_COR > 99) scoutedFG_COR = 99;
        let scoutedFG_ATB = Math.floor(Math.random()*((prospectDoc.data().FG_ATB + 4)-(prospectDoc.data().FG_ATB-4)+1))+(prospectDoc.data().FG_ATB-4);
        if (scoutedFG_ATB < 0) scoutedFG_ATB = 0;
        if (scoutedFG_ATB > 99) scoutedFG_ATB = 99;
        let scoutedFT = Math.floor(Math.random()*((prospectDoc.data().FT + 4)-(prospectDoc.data().FT-4)+1))+(prospectDoc.data().FT-4);
        if (scoutedFT > 99) scoutedFT = 99;
        let scoutedDrawFoul = Math.floor(Math.random()*((prospectDoc.data().DrawFoul + 4)-(prospectDoc.data().DrawFoul-4)+1))+(prospectDoc.data().DrawFoul-4);
        if (scoutedDrawFoul < 0) scoutedDrawFoul = 0;
        if (scoutedDrawFoul > 99) scoutedDrawFoul = 99;
        let scoutedScoring = Math.floor(Math.random()*((prospectDoc.data().Scoring + 10)-(prospectDoc.data().Scoring-10)+1))+(prospectDoc.data().Scoring-10);
        if (scoutedScoring > 99) scoutedScoring = 99;
        let scoutedPassing = Math.floor(Math.random()*((prospectDoc.data().Passing + 10)-(prospectDoc.data().Passing-10)+1))+(prospectDoc.data().Passing-10);
        if (scoutedPassing > 99) scoutedPassing = 99;
        let scoutedHandling = Math.floor(Math.random()*((prospectDoc.data().Handling + 10)-(prospectDoc.data().Handling-10)+1))+(prospectDoc.data().Handling-10);
        if (scoutedHandling > 99) scoutedHandling = 99;
        let scoutedOReb = Math.floor(Math.random()*((prospectDoc.data().OReb + 10)-(prospectDoc.data().OReb-10)+1))+(prospectDoc.data().OReb-10);
        if (scoutedOReb > 99) scoutedOReb = 99;
        let scoutedDReb = Math.floor(Math.random()*((prospectDoc.data().DReb + 10)-(prospectDoc.data().DReb-10)+1))+(prospectDoc.data().DReb-10);
        if (scoutedDReb > 99) scoutedDReb = 99;
        let scoutedBlock = Math.floor(Math.random()*((prospectDoc.data().Block + 10)-(prospectDoc.data().Block-10)+1))+(prospectDoc.data().Block-10);
        if (scoutedBlock > 99) scoutedBlock = 99;
        let scoutedSteal = Math.floor(Math.random()*((prospectDoc.data().Steal + 10)-(prospectDoc.data().Steal-10)+1))+(prospectDoc.data().Steal-10);
        if (scoutedSteal > 99) scoutedSteal = 99;
        let scoutedDefender = Math.floor(Math.random()*((prospectDoc.data().Defender + 10)-(prospectDoc.data().Defender-10)+1))+(prospectDoc.data().Defender-10);
        if (scoutedDefender > 99) scoutedDefender = 99;
        let scoutedDiscipline = Math.floor(Math.random()*((prospectDoc.data().Discipline + 10)-(prospectDoc.data().Discipline-10)+1))+(prospectDoc.data().Discipline-10);
        if (scoutedDiscipline > 99) scoutedDiscipline = 99;
        let scoutedBballIQ = Math.floor(Math.random()*((prospectDoc.data().BballIQ + 10)-(prospectDoc.data().BballIQ-10)+1))+(prospectDoc.data().BballIQ-10);
        if (scoutedBballIQ > 99) scoutedBballIQ = 99;

        db.collection('combine2029').doc(fullNameLowerCase).set({
          FullNameLowerCase: fullNameLowerCase,
          FirstName: prospectDoc.data().FirstName,
          LastName: prospectDoc.data().LastName,
          Position: prospectDoc.data().Position,
          Age: prospectDoc.data().Age,
          CollegeYear: prospectDoc.data().CollegeYear,
          Height: prospectDoc.data().Height,
          DisplayHeight: prospectDoc.data().DisplayHeight,
          Weight:  prospectDoc.data().Weight,
          College: prospectDoc.data().College,
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
          BballIQ: scoutedBballIQ
        })
      });
    });
  }
  approveArticle(abrev, articleType, x) {
    const toggleList = document.getElementsByClassName('react-toggle-screenreader-only');
    const toggle = toggleList[0];
    const adminUID2 = '7rE2d3qAg6PYFstciBnjqkxLocz2'; // Rizzo
    const adminUID = 'LvdYBDTbvZUxXlgJjkGzJlwvy0H3'; // Andrei
    const adminUID3 = 'GxQK5VTbwZgFVomtXQ5A3mtnSLt2'; // Dejan


    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    const currentUID = fire.auth.currentUser.uid;

    if (currentUID == adminUID || currentUID == adminUID2 || currentUID == adminUID3) {

        let currentScoutPoints = 0;
        db.collection("franchises").where("abrev", "==", abrev)
        .get()
        .then((doc) => {
          doc.docs.map(function(teamDoc) {
            currentScoutPoints = parseInt(teamDoc.data().availableScouts);
            let awardedPoints = 0;
            if (articleType === 'wiretap') {
              if (toggle.checked) awardedPoints = 25;
              else awardedPoints = 12;
            }
            else if (articleType === 'insider'){
              if (toggle.checked) awardedPoints = 50;
              else awardedPoints = 25;
            }

            currentScoutPoints += awardedPoints;

            if (toggle.checked) {
              if (currentScoutPoints > 100) currentScoutPoints = 100;
            }
            else if (!toggle.checked){
              if (currentScoutPoints > 50) currentScoutPoints = 50;
            }
            if (x === 1) {
              db.collection("franchises").doc(abrev).update({
                'availableScouts': currentScoutPoints,
                'articleStatus1': 'approved'
              })
              .then(function() {
                alert("Article approved!");
              });
            }
            else if (x === 2) {
              db.collection("franchises").doc(abrev).update({
                'availableScouts': currentScoutPoints,
                'articleStatus2': 'approved'
              })
              .then(function() {
                alert("Article approved!");
              });
            }
          });
        })
    }
    else {
      alert("Current user does not have admininstrative privileges!");
    }
  }
  denyArticle(abrev, articleType) {
    console.log("Denied " + articleType + "  article for " + abrev + "!");
  }
  componentDidMount() {
    let list = [];
    let franchiseList = [];
    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    let currentUID =

    // grab collection that holds all franchises
    db.collection("franchises")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.map(function(teamDoc) {
        // grab article url and articleType
        let abreviation = teamDoc.data().abrev;
        let emailAddress = teamDoc.data().email;
        let thisTeam = {
          abrev: abreviation,
          email: emailAddress
        };
        franchiseList.push(thisTeam);

        let articleLink1 = teamDoc.data().articleURL1;
        let articleType1 = teamDoc.data().articleType1;
        let articleTitle1 = teamDoc.data().articleTitle1;
        let abrev = teamDoc.data().abrev;
        let articleStatus1 = teamDoc.data().articleStatus1;
        let article = {
          abrev: abrev,
          link: articleLink1,
          type: articleType1,
          title: articleTitle1,
          status: articleStatus1,
          articleIndex: 1
        };
        if (articleLink1 && articleType1) list.push(article);

        // check for 2nd article
        let articleLink2 = teamDoc.data().articleURL2;
        let articleType2 = teamDoc.data().articleType2;
        let articleTitle2 = teamDoc.data().articleTitle2;
        let abrev2 = teamDoc.data().abrev;
        let articleStatus2 = teamDoc.data().articleStatus2;
        let article2 = {
          abrev: abrev2,
          link: articleLink2,
          type: articleType2,
          title: articleTitle2,
          status: articleStatus2,
          articleIndex: 2
        };
        if (articleLink2 && articleType2) list.push(article2);
      });
      this.setState({
        articleList: list,
        teamList: franchiseList
      });
    });
  }
  runInterviews() {
    const adminUID2 = '7rE2d3qAg6PYFstciBnjqkxLocz2'; // Rizzo
    const adminUID = 'LvdYBDTbvZUxXlgJjkGzJlwvy0H3'; // Andrei
    const adminUID3 = 'GxQK5VTbwZgFVomtXQ5A3mtnSLt2'; // Dejan

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    const currentUID = fire.auth.currentUser.uid;

    if (currentUID !== adminUID) { //|| currentUID !== adminUID2 || currentUID !== adminUID3) {
      alert("Current user does not have admininstrative privileges!");
    }
    else {
      // grab collection that holds all franchises
      db.collection("franchises").get().then(function(querySnapshot) {
        querySnapshot.docs.map(function(teamDoc) {
          // grab interviewList array for current team
          let interviewList = teamDoc.data().interviewList;
          // grab email for current franchise
          let email = teamDoc.data().email;
          let abrev = teamDoc.data().abrev;
          // use url property of each element in array to find doc in class2029 collection
          interviewList.forEach(function(prospect) {
            let docRef = db.collection('class2029').doc(prospect.url);
            docRef.get().then(function(doc) {
              // create new doc in interviews collection with randomized ratings based on referenced docs
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

              db.collection('interviews').add({
                FullNameLowerCase: fullNameLowerCase,
                Year: prospect.year,
                Email: email,
                Team: abrev,
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
                BballIQ: doc.data().BballIQ_POT
              })
            });
          });
          // empty interviewList array for this franchise
          db.collection("franchises").doc(abrev).update({
            'interviewList': []
          })
          .then(function() {
          });
        });
      });
    }
  }
  runScouts() {
    const adminUID2 = '7rE2d3qAg6PYFstciBnjqkxLocz2'; // Rizzo
    const adminUID = 'LvdYBDTbvZUxXlgJjkGzJlwvy0H3'; // Andrei
    const adminUID3 = 'GxQK5VTbwZgFVomtXQ5A3mtnSLt2'; // Dejan

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    const currentUID = fire.auth.currentUser.uid;

    var scoutingPeriod = document.getElementById("scoutingPeriodText").value;
    if (!scoutingPeriod.match(/\S/))
    {
        alert("Field is blank");
    }

    if (currentUID !== adminUID) { //|| currentUID !== adminUID2 || currentUID !== adminUID3) {
      alert("Current user does not have admininstrative privileges!");
    }
    else {
      // grab collection that holds all franchises
      db.collection("franchises").get().then(function(querySnapshot) {
        querySnapshot.docs.map(function(teamDoc) {
          // grab scoutList array for current team
          let scoutList = teamDoc.data().scoutList;
          // grab email for current franchise
          let email = teamDoc.data().email;
          let abrev = teamDoc.data().abrev;
          // use url property of each element in array to find doc in class2029 collection
          scoutList.forEach(function(prospect) {
            let docRef = db.collection('class2029').doc(prospect.url);
            docRef.get().then(function(doc) {

              // create new doc in scouts collection with randomized ratings based on referenced docs
              let fullNameLowerCase = (doc.data().LastName + doc.data().FirstName).toLowerCase().replace(/[, ']+/g, "").trim();
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
                Year: prospect.year,
                Email: email,
                Team: abrev,
                FirstName: doc.data().FirstName,
                LastName: doc.data().LastName,
                Position: doc.data().Position,
                Age: doc.data().Age,
                CollegeYear: doc.data().CollegeYear,
                Height: doc.data().Height,
                DisplayHeight: doc.data().DisplayHeight,
                Weight: doc.data().Weight,
                College: doc.data().College,
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
                BballIQ_POT: scoutedBballIQ_POT,
                ScoutingPeriod: scoutingPeriod
              })
            });
          });
          // empty scoutList array for this franchise
          // availableScouts set to 0
          // reset article fields
          db.collection("franchises").doc(abrev).update({
            'scoutList': [],
            'availableScouts': 0,
            'articleStatus1': '',
            'articleStatus2': '',
            'articleTitle1': '',
            'articleTitle2': '',
            'articleType1': '',
            'articleType2': '',
            'articleURL1': '',
            'articleURL2': ''
          })
          .then(function() {
          });
        });
      });

      let scouts = [];

      // grab all scouts
      db.collection("scouts")
      .get()
      .then((docSnapshot) => {
        docSnapshot.forEach((doc) => {
          // add each scout to array
          scouts.push(doc.data());
        });
      });
      console.log(scouts);
      //compare names in class list to scout list to get TimesScouted
      db.collection("class2029")
      .get()
      .then((docSnapShot) => {
        docSnapShot.forEach((doc) => {
          let timesScouted = 0
          scouts.forEach((scout) => {
            if (scout.FirstName === doc.data().FirstName && scout.LastName === doc.data().LastName) {
              timesScouted++;
            }
          });
          //get prospect document name
          let first = doc.data().FirstName;
          let last = doc.data().LastName;
          let fullName = last + first;
          fullName = fullName.toLowerCase().replace(/[, ']+/g, "").trim();
          db.collection("class2029").doc(fullName).update({
            "TimesScouted": timesScouted
          })
        });
      });
    }
  }
  render(){
    let articleTable = '';
    let franchiseTable = '';
    if (this.state.articleList) {
      articleTable = (
        <div>
          <table className='table table-sm'>
            <thead>
              <tr>
                <th>TEAM</th>
                <th>LINK</th>
                <th>TYPE</th>
                <th>STATUS</th>
                <th>APPROVE</th>
                <th>DENY</th>
              </tr>
            </thead>
            <tbody>
            {this.state.articleList.map((article, index) =>
              <tr>
                <td>{article.abrev}</td>
                <td><a href={article.link} target="_blank">{article.title}</a></td>
                <td>{article.type}</td>
                <td>{article.status}</td>
                <td><button onClick={() => this.approveArticle(article.abrev, article.type, article.articleIndex)} className="btn btn-success">APPROVE</button></td>
                <td><button onClick={() => this.denyArticle(article.abrev, article.type, article.articleIndex)} className="btn btn-danger">DENY</button></td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      );
    }
    if (this.state.teamList) {
      franchiseTable = (
        <div>
          <table className='table table-sm'>
            <thead>
              <tr>
                <th>TEAM</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
            {this.state.teamList.map((team, index) =>
              <tr>
                <td>{team.abrev}</td>
                <td><input size="50" defaultValue={team.email} type="text" id="fname" name="fname"></input></td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div>
        <div class='row'>
          <div class='col-sm-3'>
            <button onClick={this.runScouts} className='btn runScoutsBtn'>Run Scouts</button>
            <br />
            <br />
            <p>Scouting Period #: <input id="scoutingPeriodText" type="text" /></p>
            <br />
            <p>Clicking 'Run Scouts' will:</p>
            <ul>
              <li>type in box above: pre, nov, dec, jan, feb, mar, apr, playoffs or workouts</li>
              <li>create a new scout for all players listed in scoutList array for all teams</li>
              <li>set all teams' availableScouts to 0</li>
              <li>empties scoutList array for all teams</li>
              <li>resets all article fields for each team</li>
            </ul>
          </div>
          <div class='col-sm-3'>
            <button onClick={this.runInterviews} className='btn runInterviewsBtn'>Run Interviews</button>
            <br />
            <br />
            <p>Clicking 'Run Interviews' will:</p>
            <ul>
              <li>create a new interview for all players listed in interviewList array for all teams</li>
              <li>empties interviewList array for all teams</li>
            </ul>
          </div>
          <div class='col-sm-3'>
            <button onClick={this.runCombine} className='btn runCombineBtn'>Run Combine</button>
            <br />
            <br />
            <p>Clicking 'Run Combine' will:</p>
            <ul>
              <li>create new data for combine</li>
              <li>larger range for deviations than regular scouts</li>
            </ul>
          </div>
          <div class='col-sm-3'>
            <button onClick={this.runBigBoard} className='btn runBigBoardBtn'>Run Big Board</button>
            <br />
            <br />
            <p>Clicking 'Run Big Board' will:</p>
            <ul>
              <li>Runs variation</li>
              <li>Calculates change</li>
            </ul>
          </div>
        </div>
        <br />
        <div class='row'>
          <div class='col-sm-12 text-center'>
            <h3>Article Approval</h3>
            <label>
              <Toggle
                defaultChecked={false} />
              <span id='toggleLabel'>Double Scouting?</span>
            </label>
            {articleTable}
          </div>
        </div>
        <div class='row'>
          <div class='col-sm-12 text-center'>
            <h3>Edit Franchise's GM Email Address</h3>
            {franchiseTable}
            <button onClick={this.updateEmails} className='btn updateEmailsBtn'>Update Emails</button>
          </div>
        </div>
      </div>
    );
  }
};

export default AdminPage;

const Admininstration = withFirebase(Admin);

export {Admininstration};
