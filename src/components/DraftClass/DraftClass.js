import React from 'react';
import class2024 from './2024_basic.json';
import class2025 from './2025_basic.json';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { Link } from 'react-router-dom';

function LinkCell(value) {
  const urlString = window.location.href;
  var year = urlString.substr(urlString.length - 4);

  var fullName = value.original.LastName + value.original.FirstName;
  fullName = fullName.toLowerCase().replace(/[, ']+/g, "").trim();
  var url = "/draftclass/" + year + "/" + fullName;
  return <Link to={url}><i className="fas fa-link"></i></Link>
}

export class DraftClass extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      year: 0
    };
  }
  componentDidMount() {
    const urlString = window.location.href;
    let year = 0;
    year = urlString.substr(urlString.length - 4);
    console.log(year);
    this.setState({
      year: parseInt(year)
    });
    console.log("year: " + this.state.year);
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

    return (
      <div>
        {draftTable}
      </div>
    );
  }
};
