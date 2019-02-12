import React from 'react';
import class24 from './2024class.json';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { Link } from 'react-router-dom';
import Firebase from '../Firebase/firebase';
import 'firebase/firestore';

function LinkCell(value) {
  var url = "/prospect/" + value.original.FirstName + '-' + value.original.LastName;
  return <Link to={url}><i className="fas fa-link"></i></Link>
}

export class DraftClass extends React.Component{
  constructor(props) {
    super(props);
    this.exportData = this.exportData.bind(this);
  }
  exportData() {
    console.log('Data exported!');
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

    return (
      <div>
        <button onClick={this.exportData}>Export Class to Firestore</button>
        <ReactTable
                  data={class24}
                  columns={columns}
                  defaultPageSize = {25}
                  pageSizeOptions = {[25, class24.length]}
                />
      </div>
    );
  }
};
