import React from 'react'
import class24 from './2024class.json'
import ProspectInfo from './ProspectInfo'
import ReactTable from 'react-table'
import "react-table/react-table.css"
import { Link } from 'react-router-dom'

function LinkCell(value) {
  console.log(value.original.FirstName + '-' + value.original.LastName)
  var url = "/prospect/" + value.original.FirstName + '-' + value.original.LastName;
  return <Link to={url}><i className="fas fa-link"></i></Link>
}

export class DraftClass extends React.Component{
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
