import React from 'react'
import { Link } from 'react-router-dom'

const ProspectInfo = ({FirstName, LastName, Position, College, DisplayHeight, Weight}) =>
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
    <div>
      <p>
        <Link to={`/prospects/${FirstName}-${LastName}`}>{FirstName} {LastName}</Link> || {DisplayHeight}, {Weight} lbs. || Position: {Position} || School: {College}
      </p>
    </div>

  export default ProspectInfo
