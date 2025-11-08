import React from 'react'
import '@firebase/firestore'
import { withFirebase } from '../Firebase'
import {BasicInfo} from './BasicInfo'
import class24 from '../DraftClass/2024CSLDraftBasic.json'
import class25 from '../DraftClass/2025_basic.json'
import class26 from '../DraftClass/2026_basic.json'
import class27 from '../DraftClass/2027_basic.json'
import class28 from '../DraftClass/2028_basic.json'
import class29 from '../DraftClass/2029_basic.json'
import class30 from '../DraftClass/2030_basic.json'
import class31 from '../DraftClass/2031_basic.json'
import class32 from '../DraftClass/2032_basic.json'
import class33 from '../DraftClass/2033_basic.json'
import class34 from '../DraftClass/2034_basic.json'
import class35 from '../DraftClass/2035_basic.json'
import PieChart from 'react-minimal-pie-chart';

const ProspectPage = ({firebase}) => (
  <div>
    <ProspectInfo firebase={firebase}/>
  </div>
);

class ProspectCard extends React.Component {
  constructor(/*props: IProps*/) {
    super(/*props*/);
    this.state = {
      data: [],
      prospect: []
    };
  }
  componentDidMount() {
    let scouts = [];

    const urlString = window.location.href;
    var segments = urlString.split('/');
    var fullNameLowerCase = segments[segments.length - 1];
    var year = parseInt(segments[segments.length -2]);
    // email to search collection for documents
    var userEmail = this.props.firebase.auth.currentUser.email;

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    db.collection("scouts").where("Email", "==", userEmail).where("FullNameLowerCase", "==", fullNameLowerCase)
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        // add each scout to array
        scouts.push(doc.data());
      });
      this.setState({
        data: scouts,
        prospect: scouts[0]
      });
    });
  }
  render(){
    const urlString = window.location.href;
    var segments = urlString.split('/');
    var fullNameLowerCase = segments[segments.length - 1];
    var year = parseInt(segments[segments.length - 2]);
    let prospect = [];
    //const fullName = this.props.match.params.id;
    if (year === 2024){
      let i = class24.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class24[i];
    }
    else if (year === 2025){
      let i = class25.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class25[i];
    }
    else if (year === 2026){
      let i = class26.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class26[i];
    }
    else if (year === 2027){
      let i = class27.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class27[i];
    }
    else if (year === 2028){
      let i = class28.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class28[i];
    }
    else if (year === 2029){
      let i = class29.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class29[i];
    }
    else if (year === 2030){
      let i = class30.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class30[i];
    }
    else if (year === 2031){
      let i = class31.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class31[i];
    }
    else if (year === 2032){
      let i = class32.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class32[i];
    }
    else if (year === 2033){
      let i = class33.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class33[i];
    }
    else if (year === 2034){
      let i = class34.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class34[i];
    }
    else if (year === 2035){
      let i = class35.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
      prospect = class35[i];
    }
    let ballActionsData = [];
    let floorAreasData = [];
    let ballActionsTable = '';
    let floorAreasTable = '';
    let scoutTable = '';
    if (this.state.prospect){
      ballActionsData = [
        {title: "Drive & Kick", value: this.state.prospect.DriveKick, color: "#ff9933"},
        {title: "Drive & Shoot", value: this.state.prospect.DriveShot, color: "#ff0000"},
        {title: "Catch & Shoot", value: this.state.prospect.CS, color: "#0066ff"},
        {title: "Pull Up", value: this.state.prospect.PullUp, color: "#9900ff"},
        {title: "Post Up", value: this.state.prospect.PostUp, color: "#00cc99"},
        {title: "Pass", value: this.state.prospect.Pass, color: "#996633"}
      ];
      floorAreasData = [
        {title: "Post", value: this.state.prospect.LocPaint, color: "#99ccff"},
        {title: "Mid Range", value: this.state.prospect.LocMidrange, color: "#ffff99"},
        {title: "Corner", value: this.state.prospect.LocCorner, color: "#00cc66"},
        {title: "Above Break", value: this.state.prospect.LocATB, color: "#ff9966"}
      ];
      ballActionsTable = (
        <table className='table table-sm ballActionsTable'>
          <thead>
            <tr>
              <th>ACTION</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            <tr bgcolor="#ff9933">
              <td>Drive & Kick</td>
              <td>{this.state.prospect.DriveKick}</td>
            </tr>
            <tr bgcolor="#ff0000">
              <td>Drive & Shoot</td>
              <td>{this.state.prospect.DriveShot}</td>
            </tr>
            <tr bgcolor="#0066ff">
              <td>Catch & Shoot</td>
              <td>{this.state.prospect.CS}</td>
            </tr>
            <tr bgcolor="#9900ff">
              <td>Pull Up</td>
              <td>{this.state.prospect.PullUp}</td>
            </tr>
            <tr bgcolor="#00cc99">
              <td>Post Up</td>
              <td>{this.state.prospect.PostUp}</td>
            </tr>
            <tr bgcolor="#996633">
              <td>Pass</td>
              <td>{this.state.prospect.Pass}</td>
            </tr>
          </tbody>
        </table>
      );
      floorAreasTable = (
        <table className='table table-sm floorAreasTable'>
          <thead>
            <tr>
              <th>AREA</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            <tr bgcolor="#99ccff">
              <td>Post</td>
              <td>{this.state.prospect.LocPaint}</td>
            </tr>
            <tr bgcolor="#ffff99">
              <td>Mid Range</td>
              <td>{this.state.prospect.LocMidrange}</td>
            </tr>
            <tr bgcolor="#00cc66">
              <td>Corner</td>
              <td>{this.state.prospect.LocCorner}</td>
            </tr>
            <tr bgcolor="#ff9966">
              <td>Above Break</td>
              <td>{this.state.prospect.LocATB}</td>
            </tr>
          </tbody>
        </table>
      );
      scoutTable = (
        <div>
          <table className="table table-sm table-striped">
            <thead>
              <tr>
                <th className="player-info" colspan="3">PLAYER</th>
                <th className="dunk-rim-rates" colspan="2">RATES</th>
                <th className="shot-ratings" colspan="6">SHOT RATINGS</th>
                <th className="other-ratings" colspan="11">OTHER RATINGS</th>
              </tr>
              <tr>
                <th className="player-info" scope="col">FIRST</th>
                <th className="player-info" scope="col">LAST</th>
                <th className="player-info" scope="col">POS</th>
                <th className="dunk-rim-rates" scope="col">DUNK</th>
                <th className="dunk-rim-rates" scope="col">RIM</th>
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
              {this.state.data.map((scout, index) => (
                <tr>
                  <td>{scout.FirstName}</td>
                  <td>{scout.LastName}</td>
                  <td>{scout.Position}</td>
                  <td>{scout.DunkRate}</td>
                  <td>{scout.RARate}</td>
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
    }

    let scoutedOrNot = '';

    if (!this.state.prospect){
      scoutedOrNot = (
        <div>
          <br />
          <br />
          <h3>No Data Available</h3>
          <h5>Scout this prospect to learn his tendencies and skills.</h5>
        </div>
      );
    }
    else{
      scoutedOrNot = (
        <div>
          <div className="row">
            <div className="col-sm-4">
              <PieChart
                data={ballActionsData}
                label
                radius={40}
                labelStyle={{
                  fontSize: '5px',
                  fontFamily: 'sans-serif',
                  fill: '#121212'
                }}
              />
            </div>
            <div className="col-sm-2">
              {ballActionsTable}
            </div>
            <div className="col-sm-4">
              <PieChart
                data={floorAreasData}
                label
                radius={40}
                labelStyle={{
                  fontSize: '5px',
                  fontFamily: 'sans-serif',
                  fill: '#121212'
                }}
              />
            </div>
            <div className="col-sm-2">
              {floorAreasTable}
            </div>
          </div>
          {scoutTable}
        </div>
      );
    }
    return (
      <div>
        <BasicInfo prospect={prospect} />
        {scoutedOrNot}
      </div>
    );
  }
};

export default ProspectPage;

const ProspectInfo = withFirebase(ProspectCard);

export {ProspectInfo};
