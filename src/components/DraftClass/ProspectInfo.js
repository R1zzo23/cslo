import React from 'react'
import { Link } from 'react-router-dom'

const ProspectInfo = ({id, FirstName, LastName, Position, College, DisplayHeight, Weight}) =>
  <p>
    <Link to={`/prospect/${FirstName}-${LastName}`}>{FirstName} {LastName}</Link> || {DisplayHeight}, {Weight} lbs. || Position: {Position} || School: {College}
  </p>


  export default ProspectInfo
