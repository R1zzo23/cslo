import React from 'react'
import class24 from './2024class.json'
import ProspectInfo from './ProspectInfo'

const DraftClass = () =>
  <div>
    <h1>#### Draft Class</h1>
    <table className="table table-striped table-bordered">
      <thead className='thead-dark'>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Position</th>
          <th>College</th>
          <th>Height</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        { class24.map((prospect, i) =>
          <ProspectInfo key={i} {...prospect} />
        )}
      </tbody>
    </table>
  </div>

  export default DraftClass
