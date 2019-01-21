import React from 'react'
import { Link } from 'react-router-dom'

const ProspectInfo = ({FirstName, LastName, Position, College, DisplayHeight, Weight}) =>

    <tr>
      <td>{FirstName}</td>
      <td>{LastName}</td>
      <td>{Position}</td>
      <td>{College}</td>
      <td>{DisplayHeight}</td>
      <td>{Weight}</td>
    </tr>


  export default ProspectInfo
