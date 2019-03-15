import React from 'react';
import { Link } from 'react-router-dom';
import '@firebase/firestore'

import class24 from './2024class.json';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { withFirebase } from '../Firebase';

const DraftClassPage = ({firebase}) => (
  <div>
    <h1>Draft Class</h1>
    <DraftClassTable firebase={firebase}/>
  </div>
);

function LinkCell(value) {
  var url = "/prospect/" + value.original.FirstName + '-' + value.original.LastName;
  return <Link to={url}><i className="fas fa-link"></i></Link>
}

class DraftClass extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const prospectList = [];
    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();
    const urlString = window.location.href;
    var year = urlString.substr(urlString.length - 4);

    db.collection("class" + year).get().then((snapshot) => {
      snapshot.forEach(doc => {
        prospectList.push(doc.data());
      });
    });

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

    return (
      <div>
        <ReactTable
                  data={prospectList}
                  columns={columns}
                  defaultPageSize = {25}
                  pageSizeOptions = {[25, prospectList.length]}
                />
      </div>
    );
  }
};

export default DraftClassPage;

const DraftClassTable = withFirebase(DraftClass);

export { DraftClassTable };
