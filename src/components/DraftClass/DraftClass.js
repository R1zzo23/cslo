import React from 'react';
import '@firebase/firestore'
import { withFirebase } from '../Firebase'
import class2024 from './2024CSLDraftBasic.json';
import class2025 from './2025_basic.json';
import class2026 from './2026_basic.json';
import class2027 from './2027_basic.json';
import class2028 from './2028_basic.json';
import class2029 from './2029_basic.json';
import class2030 from './2030_basic.json';
import class2031 from './2031_basic.json';
import class2032 from './2032_basic.json';
import class2033 from './2033_basic.json';
import class2034 from './2034_basic.json';
import class2035 from './2035_basic.json';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { CSVLink, CSVDownload } from "react-csv"
import { Link } from 'react-router-dom';

function LinkCell(value) {
  const urlString = window.location.href;
  var year = urlString.substr(urlString.length - 4);

  var fullName = value.original.LastName + value.original.FirstName;
  fullName = fullName.toLowerCase().replace(/[, ']+/g, "").trim();
  var url = "/draftclass/" + year + "/" + fullName;
  return <Link to={url}><i className="fas fa-link"></i></Link>
}

const DraftClassPage = ({firebase}) => (
  <div>
    <DraftClassHQ firebase={firebase}/>
  </div>
);

class DraftClass extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      year: 0,
      combineData: [],
      combineFileName: '',
      combineHeaders: [
        { label: "First", key: "FirstName" },
        { label: "Last", key: "LastName" },
        { label: "POS", key: "Position"},
        { label: "AGE", key: "Age"},
        { label: "HT", key: "DisplayHeight"},
        { label: "WT", key: "Weight"},
        { label: "FROM", key: "College"},
        { label: "FG_RA", key: "FG_RA"},
        { label: "FG_ITP", key: "FG_ITP"},
        { label: "FG_MID", key: "FG_MID"},
        { label: "FG_COR", key: "FG_COR"},
        { label: "FG_ATB", key: "FG_ATB"},
        { label: "FT", key: "FT"},
        { label: "SCR", key: "Scoring"},
        { label: "PAS", key: "Passing"},
        { label: "HDL", key: "Handling"},
        { label: "ORB", key: "OReb"},
        { label: "DRB", key: "DReb"},
        { label: "BLK", key: "Block"},
        { label: "STL", key: "Steal"},
        { label: "DRFL", key: "DrawFoul"},
        { label: "DEF", key: "Defender"},
        { label: "DIS", key: "Discipline"},
        { label: "IQ", key: "BballIQ"}
      ]
    };
  }
  componentDidMount() {
    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    const urlString = window.location.href;
    let year = 0;
    let prospects = [];
    year = urlString.substr(urlString.length - 4);
    let fileName = year + '-Combine';
    this.setState({
      year: parseInt(year),
      combineFileName: fileName
    });

    let collectionRef = '';

    if (year === '2024') collectionRef = 'combine2024';
    else if (year === '2025') collectionRef = 'combine2025';
    else if (year === '2026') collectionRef = 'combine2026';
    else if (year === '2027') collectionRef = 'combine2027';
    else if (year === '2028') collectionRef = 'combine2028';
    else if (year === '2029') collectionRef = 'combine2029';
    else if (year === '2030') collectionRef = 'combine2030';
    else if (year === '2031') collectionRef = 'combine2031';
    else if (year === '2032') collectionRef = 'combine2032';
    else if (year === '2033') collectionRef = 'combine2033';
    else if (year === '2034') collectionRef = 'combine2034';
    else if (year === '2035') collectionRef = 'combine2035';
    // grab all scouts for this franchise
    db.collection(collectionRef)
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        // add each scout to array
        prospects.push(doc.data());
      });
      // sort scouts array by LastName then FirstName
      prospects.sort((a, b) => (a.LastName > b.LastName) ? 1 : (a.LastName === b.LastName) ? ((a.FirstName > b.FirstName) ? 1 : -1) : -1 )
      this.setState({
        combineData: prospects
      });
      console.log(prospects.length);
      if (prospects.length === 0) {
        document.getElementById('combineBtn').classList.add("disabled");
      }
    });
  }
  render() {
    const columns = [{
      Header: 'Link',
      Cell: LinkCell,
      width: 50
    },{
      Header: 'First',
      accessor: 'FirstName',
      width: 200,
    },{
      Header: 'Last',
      accessor: 'LastName',
      width: 200
    },{
      Header: 'Age',
      accessor: 'Age',
      width: 100
    },{
      Header: 'Position',
      accessor: 'Position',
      width: 100
    },{
      Header: 'From',
      accessor: 'College',
      width: 200
    },{
      Header: 'Height',
      accessor: 'DisplayHeight',
      width: 100
    },{
      Header: 'Weight',
      accessor: 'Weight',
      width: 100
    }]

    let draftTable = '';
    let combineCSV =  (
      <CSVLink data={this.state.combineData}
               id="combineBtn"
               filename={this.state.combineFileName}
               className="btn btn-danger"
               target="_blank"
               headers={this.state.combineHeaders}>
        Download Combine Data
      </CSVLink>
    );

    if (this.state.year === 2024) {
      draftTable = (

      <ReactTable
                data={class2024}
                columns={columns}
                defaultPageSize = {class2024.length}
              />
      );
    }
    else if (this.state.year === 2025) {
      draftTable = (

      <ReactTable
                data={class2025}
                columns={columns}
                defaultPageSize = {class2025.length}
              />
      );
    }
    else if (this.state.year === 2026) {
      draftTable = (

      <ReactTable
                data={class2026}
                columns={columns}
                defaultPageSize = {class2026.length}
              />
      );
    }
    else if (this.state.year === 2027) {
      draftTable = (

      <ReactTable
                data={class2027}
                columns={columns}
                defaultPageSize = {class2027.length}
              />
      );
    }
    else if (this.state.year === 2028) {
      draftTable = (

      <ReactTable
                data={class2028}
                columns={columns}
                defaultPageSize = {class2028.length}
              />
      );
    }
    else if (this.state.year === 2029) {
      draftTable = (

      <ReactTable
                data={class2029}
                columns={columns}
                defaultPageSize = {class2029.length}
              />
      );
    }
    else if (this.state.year === 2030) {
      draftTable = (

      <ReactTable
                data={class2030}
                columns={columns}
                defaultPageSize = {class2030.length}
              />
      );
    }
    else if (this.state.year === 2031) {
      draftTable = (

      <ReactTable
                data={class2031}
                columns={columns}
                defaultPageSize = {class2031.length}
              />
      );
    }
    else if (this.state.year === 2032) {
      draftTable = (

      <ReactTable
                data={class2032}
                columns={columns}
                defaultPageSize = {class2032.length}
              />
      );
    }
    else if (this.state.year === 2033) {
      draftTable = (

      <ReactTable
                data={class2033}
                columns={columns}
                defaultPageSize = {class2033.length}
              />
      );
    }
    else if (this.state.year === 2034) {
      draftTable = (

      <ReactTable
                data={class2034}
                columns={columns}
                defaultPageSize = {class2034.length}
              />
      );
    }
    else if (this.state.year === 2035) {
      draftTable = (

      <ReactTable
                data={class2035}
                columns={columns}
                defaultPageSize = {class2035.length}
              />
      );
    }

    return (
      <div>
        {combineCSV}
        {draftTable}
      </div>
    );
  }
};

export default DraftClassPage;

const DraftClassHQ = withFirebase(DraftClass);

export {DraftClassHQ};
