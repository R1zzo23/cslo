import React from 'react'
import { Link } from 'react-router-dom'

const ProspectInfo = ({FirstName, LastName, Position, College, DisplayHeight, Weight}) =>
  <p>
    <Link to={`/prospect/${FirstName}-${LastName}`}>{FirstName} {LastName}</Link> || {DisplayHeight}, {Weight} lbs. || Position: {Position} || School: {College}
  </p>
  /*<Link to={`/prospects/${FirstName}-${LastName}`}>
      <tr>
        <td>{FirstName}</td>
        <td>{LastName}</td>
        <td>{Position}</td>
        <td>{College}</td>
        <td>{DisplayHeight}</td>
        <td>{Weight}</td>
      </tr>
    </Link>*/


  export default ProspectInfo
