import React from 'react'
import '@firebase/firestore'
import { withFirebase } from '../Firebase'
import { CSVLink, CSVDownload } from "react-csv"
import Select from 'react-select'

const TeamPage = ({firebase}) => (
  <div>
    <TeamHQ firebase={firebase}/>
  </div>
);

const options = [
  { value: 'all', label: 'All' },
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' },
  { value: '2026', label: '2026' },
  { value: '2027', label: '2027' },
  { value: '2028', label: '2028' },
  { value: '2029', label: '2029' },
  { value: '2030', label: '2030' }
];

const scoutPeriods = [
  { value: 'all', label: 'All' },
  { value: 'pre', label: 'Pre' },
  { value: 'nov', label: 'Nov' },
  { value: 'dec', label: 'Dec' },
  { value: 'jan', label: 'Jan' },
  { value: 'feb', label: 'Feb' },
  { value: 'mar', label: 'Mar' },
  { value: 'apr', label: 'Apr' },
  { value: 'playoffs', label: 'Playoffs' },
  { value: 'workouts', label: 'Workouts' }
]

class Team extends React.Component{
  constructor(props: IProps) {
    super(props);
    this.submitArticle = this.submitArticle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeScoutPeriod = this.handleChangeScoutPeriod.bind(this);
    this.state = {
      selectedOption: null,
      scoutData: [],
      interviewData: [],
      abrev: "",
      team: "",
      submitArticleBtn1: '',
      submitArticleBtn2: '',
      articleURL1: "",
      articleTitle1: "",
      articleType1: "",
      articleStatus1: "",
      articleURL2: "",
      articleTitle2: "",
      articleType2: "",
      articleStatus2: "",
      scoutFileName: "",
      interviewFileName: "",
      interviewHeaders: [
        { label: "First", key: "FirstName" },
        { label: "Last", key: "LastName" },
        { label: "POS", key: "Position"},
        { label: "YEAR", key: "Year"},
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
        { label: "YEAR", key: "Year"},
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
        { label: "FG_ATB", key: "FG_ATB"},
        { label: "FG_ATB_POT", key: "FG_ATB_POT"},
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
  handleChangeScoutPeriod(selecedScoutPeriod){
    this.setState({ selecedScoutPeriod });

    // Declare variables
    var filter, table, interviewTable, tr, trInterviews, td, i, txtValue;
    filter = selecedScoutPeriod.value;
    table = document.getElementById("scoutTable");
    interviewTable = document.getElementById('interviewTable');
    tr = table.getElementsByTagName("tr");
    trInterviews = interviewTable.getElementsByTagName('tr');

    // Loop through all scout table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      if (filter === 'all') {
        tr[i].style.display = '';
      }
      else {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue === filter) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
    // Loop through all interview table rows, and hide those who don't match the search query
    for (i = 0; i < trInterviews.length; i++) {
      if (filter === 'all') {
        trInterviews[i].style.display = '';
      }
      else {
        td = trInterviews[i].getElementsByTagName("td")[3];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue === filter) {
            trInterviews[i].style.display = "";
          } else {
            trInterviews[i].style.display = "none";
          }
        }
      }
    }
  }

  handleChange(selectedOption){
    this.setState({ selectedOption });

    // Declare variables
    var filter, table, interviewTable, tr, trInterviews, td, i, txtValue;
    filter = selectedOption.value;
    table = document.getElementById("scoutTable");
    interviewTable = document.getElementById('interviewTable');
    tr = table.getElementsByTagName("tr");
    trInterviews = interviewTable.getElementsByTagName('tr');

    // Loop through all scout table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      if (filter === 'all') {
        tr[i].style.display = '';
      }
      else {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue === filter) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
    // Loop through all interview table rows, and hide those who don't match the search query
    for (i = 0; i < trInterviews.length; i++) {
      if (filter === 'all') {
        trInterviews[i].style.display = '';
      }
      else {
        td = trInterviews[i].getElementsByTagName("td")[3];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue === filter) {
            trInterviews[i].style.display = "";
          } else {
            trInterviews[i].style.display = "none";
          }
        }
      }
    }
  }
  componentDidMount() {
    // email to search collection for documents
    var userEmail = this.props.firebase.auth.currentUser.email;

    var teamAbrev;

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    let scouts = [];
    let interviews = [];

    // set state with franchise info
    db.collection("franchises").where("email", "==", userEmail)
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        this.setState({
          abrev: doc.data().abrev,
          team: doc.data().team,
          scoutFileName: doc.data().abrev + '-scouts',
          interviewFileName: doc.data().abrev + '-interviews',
          articleURL1: doc.data().articleURL1,
          articleTitle1: doc.data().articleTitle1,
          articleType1: doc.data().articleType1,
          articleStatus1: doc.data().articleStatus1,
          articleURL2: doc.data().articleURL2,
          articleTitle2: doc.data().articleTitle2,
          articleType2: doc.data().articleType2,
          articleStatus2: doc.data().articleStatus2,
        });
        teamAbrev = doc.data().abrev;

        // grab all scouts for this franchise
        db.collection("scouts").where("Team", "==", teamAbrev)
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
        // grab all interviews for this franchise
        db.collection("interviews").where("Email", "==", userEmail)
        .get()
        .then((docSnapshot) => {
          docSnapshot.forEach((doc) => {
            // add each interview to array
            interviews.push(doc.data());
          });
          // sort interviews array by LastName then FirstName
          interviews.sort((a, b) => (a.LastName > b.LastName) ? 1 : (a.LastName === b.LastName) ? ((a.FirstName > b.FirstName) ? 1 : -1) : -1 )
          this.setState({
            interviewData: interviews
          });
        });
      });

      // populate article submission form if a form was previously submitted
      let urlTextBox = document.getElementById('articleURL1');
      urlTextBox.value = this.state.articleURL1;
      let titleTextBox = document.getElementById('articleTitle1');
      titleTextBox.value = this.state.articleTitle1;
      let wiretapRadio = document.getElementById('wiretapRadio1');
      let insiderRadio = document.getElementById('insiderRadio1');
      if (this.state.articleType1 === "wiretap") wiretapRadio.checked = true;
      else if (this.state.articleType1 === "insider") insiderRadio.checked = true;
      let status1 = document.getElementById('articleStatus1');
      if (this.state.articleStatus1) {
        status1.textContent = this.state.articleStatus1;
        let submitArticleBtn1 = document.getElementById('submitArtcleBtn1');
        if (this.state.articleStatus1 === "approved")
          submitArticleBtn1.disabled = true;
      }


      let urlTextBox2 = document.getElementById('articleURL2');
      urlTextBox2.value = this.state.articleURL2;
      let titleTextBox2 = document.getElementById('articleTitle2');
      titleTextBox2.value = this.state.articleTitle2;
      let wiretapRadio2 = document.getElementById('wiretapRadio2');
      let insiderRadio2 = document.getElementById('insiderRadio2');
      if (this.state.articleType2 === "wiretap") wiretapRadio2.checked = true;
      else if (this.state.articleType2 === "insider") insiderRadio2.checked = true;
      let status2 = document.getElementById('articleStatus2');
      if (this.state.articleStatus2 ) {
        status2.textContent = this.state.articleStatus2;
        let submitArticleBtn2 = document.getElementById('submitArtcleBtn2');
        if (this.state.articleStatus2 === "approved")
          submitArticleBtn2.disabled = true;
      }
    });
  }
  submitArticle(x) {
    var userEmail = this.props.firebase.auth.currentUser.email;

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    let articleType = '';
    let abrev = this.state.abrev;

    let urlTextBox = '';
    let titleTextBox = '';
    let wiretapRadio = '';
    let insiderRadio = '';

    if (x === 1) {
      urlTextBox = document.getElementById('articleURL1');
      titleTextBox = document.getElementById('articleTitle1');
      wiretapRadio = document.getElementById('wiretapRadio1');
      insiderRadio = document.getElementById('insiderRadio1');
    }

    else if (x === 2) {
      urlTextBox = document.getElementById('articleURL2');
      titleTextBox = document.getElementById('articleTitle2');
      wiretapRadio = document.getElementById('wiretapRadio2');
      insiderRadio = document.getElementById('insiderRadio2');
    }

    // check if URL box is filled in
    if (urlTextBox.value === ""){
      alert("Enter a valid link!");
    }
    // check if title box is filled in
    else if (titleTextBox.value === ''){
      alert("Enter a valid title!");
    }
    // check if either radio button is selected
    else if (!wiretapRadio.checked && !insiderRadio.checked){
      alert("Select an article type!");
    }
    // assign article type based on radio button selected
    else {
      if (wiretapRadio.checked) articleType = "wiretap"
      else if (insiderRadio.checked) articleType = "insider"

      // update franchise document with article object (url, articleType)
      if (x === 1) {
        db.collection("franchises").doc(abrev).update({
          'articleURL1': urlTextBox.value,
          'articleType1': articleType,
          'articleTitle1': titleTextBox.value,
          'articleStatus1': 'pending'
        })
        .then(function() {
          alert("Article submitted for admin approval!");
        });
      }
      else if (x === 2) {
        db.collection("franchises").doc(abrev).update({
          'articleURL2': urlTextBox.value,
          'articleType2': articleType,
          'articleTitle2': titleTextBox.value,
          'articleStatus2': 'pending'
        })
        .then(function() {
          alert("Article submitted for admin approval!");
        });
      }
    }
  }
  render(){
    const { selectedOption } = this.state;
    const { selectedScoutPeriod } = this.state;
    const scoutTable = (
      <div>
        <CSVLink data={this.state.scoutData}
                 filename={this.state.scoutFileName}
                 className="btn btn-primary"
                 target="_blank"
                 headers={this.state.scoutHeaders}>
          Export Scouts to CSV
        </CSVLink>
        <table id='scoutTable' className="table table-sm">
          <thead>
            <tr>
              <th className="player-info" colSpan="5">PLAYER</th>
              <th className="dunk-rim-rates" colSpan="2">RATES</th>
              <th className="ball-actions" colSpan="6">BALL ACTIONS</th>
              <th className="floor-locations" colSpan="4">FLOOR LOCATIONS</th>
              <th className="shot-ratings" colSpan="6">SHOT RATINGS</th>
              <th className="other-ratings" colSpan="11">OTHER RATINGS</th>
            </tr>
            <tr>
              <th className="player-info" scope="col">FIRST</th>
              <th className="player-info" scope="col">LAST</th>
              <th className="player-info" scope="col">POS</th>
              <th className="player-info" scope="col">CLASS</th>
              <th className="player-info" scope="col">SCOUT PERIOD</th>
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
                <td>{scout.Year}</td>
                <td>{scout.ScoutingPeriod}</td>
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
                 className="btn btn-danger"
                 target="_blank"
                 headers={this.state.interviewHeaders}>
          Export Interviews to CSV
        </CSVLink>
        <table id='interviewTable' className="table table-sm">
          <thead>
            <tr>
              <th className="player-info" scope="col">FIRST</th>
              <th className="player-info" scope="col">LAST</th>
              <th className="player-info" scope="col">POS</th>
              <th className="player-info" scope="col">CLASS</th>
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
                <td>{interview.Year}</td>
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
        <h1>{this.state.team}</h1>
        <h3>Article Submission</h3>
        <div class='row'>
          <form>
            <input id='articleURL1' className='articleURL' type="text" placeholder="Article Link" name="articleURL" />
            <input id='articleTitle1' className='articleTitle' type="text" placeholder="Article Title" name="articleTitle" />
            <input id='wiretapRadio1' className='radioBtn' type="radio" name="articleType" value="wiretap" /><span className='radioBtn'>Wiretap</span>
            <input id='insiderRadio1' className='radioBtn' type="radio" name="articleType" value="insider" /><span className='radioBtn'>Insider</span>
          </form>
          <button className='text-center' onClick={() => this.submitArticle(1)} id='submitArtcleBtn1' className='btn submitArticleBtn'>Submit Article</button>
          <p>Status: <span id='articleStatus1'>{this.state.articleStatus1}</span></p>
          <br />
        </div>
        <div class='row'>
          <form>
            <input id='articleURL2' className='articleURL' type="text" placeholder="Article Link" name="articleURL2" />
            <input id='articleTitle2' className='articleTitle' type="text" placeholder="Article Title" name="articleTitle2" />
            <input id='wiretapRadio2' className='radioBtn' type="radio" name="articleType" value="wiretap" /><span className='radioBtn'>Wiretap</span>
            <input id='insiderRadio2' className='radioBtn' type="radio" name="articleType" value="insider" /><span className='radioBtn'>Insider</span>
          </form>
          <button className='text-center' onClick={() => this.submitArticle(2)} id='submitArtcleBtn2' className='btn submitArticleBtn'>Submit Article</button>
          <p>Status: <span id='articleStatus2'>{this.state.articleStatus2}</span></p>
          <br />
        </div>
        <br />
        <p>Draft Class Filter:</p><Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <br />
        <p>Scout Period Filter:</p><Select
          value={selectedScoutPeriod}
          onChange={this.handleChangeScoutPeriod}
          options={scoutPeriods}
        />
        <br />
        {scoutTable}
        {interviewTable}
      </div>
    );
  }
};

export default TeamPage;

const TeamHQ = withFirebase(Team);

export {TeamHQ};
