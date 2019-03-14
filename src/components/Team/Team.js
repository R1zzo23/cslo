import React, { Component } from 'react'
import '@firebase/firestore'
import { withFirebase } from '../Firebase'
import { CSVLink, CSVDownload } from "react-csv"

const TeamPage = ({firebase}) => (
  <div>
    <h1>Team Page</h1>
    <TeamHQ firebase={firebase}/>
  </div>
);

class Team extends React.Component{
  constructor(props: IProps) {
    super(props);
    this.state = {
      scoutData: [],
      interviewData: [],
      abrev: "",
      team: "",
      scoutFileName: "",
      interviewFileName: "",
      interviewHeaders: [
        { label: "First", key: "FirstName" },
        { label: "Last", key: "LastName" },
        { label: "POS", key: "Position"},
        { label: "AGE", key: "Age"},
        { label: "HT", key: "DisplayHeight"},
        { label: "WT", key: "Weight"},
        { label: "FROM", key: "College"},
        { label: "IQ", key: "BballIQ"},
        { label: "CON", key: "Consistency"},
        { label: "GREED", key: "Greed"},
        { label: "LOY", key: "Loyalty"},
        { label: "PFW", key: "PlayForWinner"},
        { label: "PT", key: "PlayingTime"},
        { label: "PER", key: "Personality"},
        { label: "DUR", key: "Durability"},
        { label: "WE", key: "WorkEthic"}
      ],
      scoutHeaders: [
        { label: "First", key: "FirstName" },
        { label: "Last", key: "LastName" },
        { label: "POS", key: "Position"},
        { label: "AGE", key: "Age"},
        { label: "HT", key: "DisplayHeight"},
        { label: "WT", key: "Weight"},
        { label: "FROM", key: "College"},
        { label: "DUNK RATE", key: "DunkRate"},
        { label: "RIM AREA RATE", key: "RARate"},
        { label: "DriveKick", key: "DriveKick"},
        { label: "DriveShot", key: "DriveShot"},
        { label: "PostUp", key: "PostUp"},
        { label: "PullUp", key: "PullUp"},
        { label: "CS", key: "CS"},
        { label: "PASS", key: "Pass"},
        { label: "LocATB", key: "LocATB"},
        { label: "LocCorner", key: "LocCorner"},
        { label: "LodMid", key: "LocMidrange"},
        { label: "LocPaint", key: "LocPaint"},
        { label: "FG_RA", key: "FG_RA"},
        { label: "FG_RA_POT", key: "FG_RA_POT"},
        { label: "FG_ITP", key: "FG_ITP"},
        { label: "FG_ITP_POT", key: "FG_ITP_POT" },
        { label: "FG_MID", key: "FG_MID"},
        { label: "FG_MID_POT", key: "FG_MID_POT"},
        { label: "FG_COR", key: "FG_COR"},
        { label: "FG_COR_POT", key: "FG_COR_POT"},
        { label: "FT", key: "FT"},
        { label: "FT_POT", key: "FT_POT"},
        { label: "SCR", key: "Scoring"},
        { label: "SCR_POT", key: "Scoring_POT"},
        { label: "PAS", key: "Passing"},
        { label: "PAS_POT", key: "Passing_POT"},
        { label: "HDL", key: "Handling"},
        { label: "HDL_POT", key: "Handling_POT"},
        { label: "ORB", key: "OReb"},
        { label: "ORB_POT", key: "OReb_POT"},
        { label: "DRB", key: "DReb"},
        { label: "DRB_POT", key: "DReb_POT"},
        { label: "BLK", key: "Block"},
        { label: "BLK_POT", key: "Block_POT"},
        { label: "STL", key: "Steal"},
        { label: "STL_POT", key: "Steal_POT"},
        { label: "DRFL", key: "DrawFoul"},
        { label: "DRFL_POT", key: "DrawFoul_POT"},
        { label: "DEF", key: "Defender"},
        { label: "DEF_POT", key: "Defender_POT"},
        { label: "DIS", key: "Discipline"},
        { label: "DIS_POT", key: "Discipline_POT"},
        { label: "IQ", key: "BballIQ"},
        { label: "IQ_POT", key: "BballIQ_POT"}
      ]
    };
  }
  componentDidMount() {
    // email to search collection for documents
    var userEmail = this.props.firebase.auth.currentUser.email;

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    let scouts = [];
    let interviews = [];

    db.collection("franchises").where("email", "==", userEmail)
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        this.setState({
          abrev: doc.data().abrev,
          team: doc.data().team,
          scoutFileName: doc.data().abrev + '-scouts',
          interviewFileName: doc.data().abrev + '-interviews'
        });
      });
    });

    db.collection("scouts").where("Email", "==", userEmail)
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        // add each scout to array
        scouts.push(doc.data());
      });
      // sort scouts array by LastName then FirstName
      scouts.sort((a, b) => (a.LastName > b.LastName) ? 1 : (a.LastName === b.LastName) ? ((a.FirstName > b.FirstName) ? 1 : -1) : -1 )
      this.setState({
        scoutData: scouts
      });
    });

    db.collection("interviews").where("Email", "==", userEmail)
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        // add each interview to array
        interviews.push(doc.data());
      });
      // sort interviews array by LastName then FirstName
      scouts.sort((a, b) => (a.LastName > b.LastName) ? 1 : (a.LastName === b.LastName) ? ((a.FirstName > b.FirstName) ? 1 : -1) : -1 )
      this.setState({
        interviewData: interviews
      });
    });
  }
  render(){
    const scoutTable = (
      <div>
        <CSVLink data={this.state.scoutData}
                 filename={this.state.scoutFileName}
                 className="btn btn-primary"
                 target="_blank"
                 headers={this.state.scoutHeaders}>
          Export Scouts to CSV
        </CSVLink>
        <table className="table table-sm table-striped">
          <thead>
            <tr>
              <th className="player-info" colspan="3">PLAYER</th>
              <th className="dunk-rim-rates" colspan="2">RATES</th>
              <th className="ball-actions" colspan="6">BALL ACTIONS</th>
              <th className="floor-locations" colspan="4">FLOOR LOCATIONS</th>
              <th className="shot-ratings" colspan="6">SHOT RATINGS</th>
              <th className="other-ratings" colspan="11">OTHER RATINGS</th>
            </tr>
            <tr>
              <th className="player-info" scope="col">FIRST</th>
              <th className="player-info" scope="col">LAST</th>
              <th className="player-info" scope="col">POS</th>
              <th className="dunk-rim-rates" scope="col">DUNK</th>
              <th className="dunk-rim-rates" scope="col">RIM</th>
              <th className="ball-actions" scope="col">DriveKick</th>
              <th className="ball-actions" scope="col">DriveShoot</th>
              <th className="ball-actions" scope="col">PostUp</th>
              <th className="ball-actions" scope="col">PullUp</th>
              <th className="ball-actions" scope="col">CS</th>
              <th className="ball-actions" scope="col">Pass</th>
              <th className="floor-locations" scope="col">ATB</th>
              <th className="floor-locations" scope="col">COR</th>
              <th className="floor-locations" scope="col">MID</th>
              <th className="floor-locations" scope="col">PAINT</th>
              <th className="shot-ratings" scope="col">RIM</th>
              <th className="shot-ratings" scope="col">PAINT</th>
              <th className="shot-ratings" scope="col">MID</th>
              <th className="shot-ratings" scope="col">COR</th>
              <th className="shot-ratings" scope="col">ATB</th>
              <th className="shot-ratings" scope="col">FT</th>
              <th className="other-ratings" scope="col">SCR</th>
              <th className="other-ratings" scope="col">PAS</th>
              <th className="other-ratings" scope="col">HDL</th>
              <th className="other-ratings" scope="col">ORB</th>
              <th className="other-ratings" scope="col">DRB</th>
              <th className="other-ratings" scope="col">BLK</th>
              <th className="other-ratings" scope="col">STL</th>
              <th className="other-ratings" scope="col">DRFL</th>
              <th className="other-ratings" scope="col">DEF</th>
              <th className="other-ratings" scope="col">DIS</th>
              <th className="other-ratings" scope="col">IQ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.scoutData.map((scout, index) => (
              <tr>
                <td>{scout.FirstName}</td>
                <td>{scout.LastName}</td>
                <td>{scout.Position}</td>
                <td>{scout.DunkRate}</td>
                <td>{scout.RARate}</td>
                <td>{scout.DriveKick}</td>
                <td>{scout.DriveShot}</td>
                <td>{scout.PostUp}</td>
                <td>{scout.PullUp}</td>
                <td>{scout.CS}</td>
                <td>{scout.Pass}</td>
                <td>{scout.LocATB}</td>
                <td>{scout.LocCorner}</td>
                <td>{scout.LocMidrange}</td>
                <td>{scout.LocPaint}</td>
                <td>{scout.FG_RA}/{scout.FG_RA_POT}</td>
                <td>{scout.FG_ITP}/{scout.FG_ITP_POT}</td>
                <td>{scout.FG_MID}/{scout.FG_MID_POT}</td>
                <td>{scout.FG_COR}/{scout.FG_COR_POT}</td>
                <td>{scout.FG_ATB}/{scout.FG_ATB_POT}</td>
                <td>{scout.FT}/{scout.FT_POT}</td>
                <td>{scout.Scoring}/{scout.Scoring_POT}</td>
                <td>{scout.Passing}/{scout.Passing_POT}</td>
                <td>{scout.Handling}/{scout.Handling_POT}</td>
                <td>{scout.OReb}/{scout.OReb_POT}</td>
                <td>{scout.DReb}/{scout.DReb_POT}</td>
                <td>{scout.Block}/{scout.Block_POT}</td>
                <td>{scout.Steal}/{scout.Steal_POT}</td>
                <td>{scout.DrawFoul}/{scout.DrawFoul_POT}</td>
                <td>{scout.Defender}/{scout.Defender_POT}</td>
                <td>{scout.Discipline}/{scout.Discipline_POT}</td>
                <td>{scout.BballIQ}/{scout.BballIQ_POT}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    const interviewTable = (
      <div>
        <CSVLink data={this.state.interviewData}
                 filename={this.state.interviewFileName}
                 className="btn btn-primary"
                 target="_blank"
                 headers={this.state.interviewHeaders}>
          Export Interviews to CSV
        </CSVLink>
        <table className="table table-sm table-striped">
          <thead>
            <tr>
              <th className="player-info" scope="col">FIRST</th>
              <th className="player-info" scope="col">LAST</th>
              <th className="player-info" scope="col">POS</th>
              <th className="other-ratings" scope="col">IQ</th>
              <th className="other-ratings" scope="col">CON</th>
              <th className="other-ratings" scope="col">GREED</th>
              <th className="other-ratings" scope="col">LOY</th>
              <th className="other-ratings" scope="col">PFW</th>
              <th className="other-ratings" scope="col">PT</th>
              <th className="other-ratings" scope="col">PER</th>
              <th className="other-ratings" scope="col">DUR</th>
              <th className="other-ratings" scope="col">WE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.interviewData.map((interview, index) => (
              <tr>
                <td>{interview.FirstName}</td>
                <td>{interview.LastName}</td>
                <td>{interview.Position}</td>
                <td>{interview.BballIQ}</td>
                <td>{interview.Consistency}</td>
                <td>{interview.Greed}</td>
                <td>{interview.Loyalty}</td>
                <td>{interview.PlayForWinner}</td>
                <td>{interview.PlayingTime}</td>
                <td>{interview.Personality}</td>
                <td>{interview.Durability}</td>
                <td>{interview.WorkEthic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    return (
      <div>
        {scoutTable}
        {interviewTable}
      </div>
    );
  }
};

export default TeamPage;

const TeamHQ = withFirebase(Team);

export {TeamHQ};
