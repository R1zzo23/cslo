import React from 'react'
import class24 from './2024class.json'
import ProspectInfo from './ProspectInfo'
import ReactTable from 'react-table'
import "react-table/react-table.css"
import { Link } from 'react-router-dom'

function MyCell({ value, columnProps: { rest: { someFunc } } }) {
  console.log(cellInfo.row);
  return <Link to="/sendscouts" onClick={someFunc}>{value}</Link>
}

export class DraftClass extends React.Component{
  render() {
    const columns = [{
      Header: 'First',
      accessor: 'FirstName',
      Cell: MyCell,
        getProps: () => ({ someFunc: () => alert("clicked")}),
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

/*const DraftClass = () =>
  <div>
    <div className='row'>
      <ReactTable
        data={class24}
      />
      <h4>Developer Notes:</h4>
      <ul>
        <li>Will get info into formatted table</li>
        <li>Will customize URL to match each class specifically</li>
        <li>Each table row will be clickable to send direct to player card</li>
      </ul>
    </div>
    <br />
    <h1>2024 CSL Draft Class</h1>
    { class24.map((prospect, i) =>
      <ProspectInfo key={i} id={i} {...prospect} />
    )}
  </div>

  export default DraftClass
*/
