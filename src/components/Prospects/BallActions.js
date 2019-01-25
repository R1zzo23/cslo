import React from 'react'

const BallActions = ({prospect}) =>
  <table className="table table-bordered">
    <thead className='thead-dark'>
      <tr>
        <th>Ball Action</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Drive & Kick</td>
        <td>{prospect.DriveKick}</td>
      </tr>
      <tr>
        <td>Drive & Shoot</td>
        <td>{prospect.DriveShot}</td>
      </tr>
      <tr>
        <td>Catch & Shoot</td>
        <td>{prospect.CS}</td>
      </tr>
      <tr>
        <td>Pull Up Jumper</td>
        <td>{prospect.PullUp}</td>
      </tr>
      <tr>
        <td>Post Up</td>
        <td>{prospect.PostUp}</td>
      </tr>
      <tr>
        <td>Pass</td>
        <td>{prospect.Pass}</td>
      </tr>
    </tbody>
  </table>

  export default BallActions
