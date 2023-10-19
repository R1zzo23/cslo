import React from 'react'

const ShootingAbility = ({prospect}) =>
  <table className="table table-bordered">
    <thead className='thead-dark'>
      <tr>
        <th>Shooting Area</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Restricted Area</td>
        <td>{prospect.FG_RA}/{prospect.FG_RA_POT}</td>
      </tr>
      <tr>
        <td>Paint</td>
        <td>{prospect.FG_ITP}/{prospect.FG_ITP_POT}</td>
      </tr>
      <tr>
        <td>Mid Range</td>
        <td>{prospect.FG_MID}/{prospect.FG_MID_POT}</td>
      </tr>
      <tr>
        <td>Corner</td>
        <td>{prospect.FG_COR}/{prospect.FG_COR_POT}</td>
      </tr>
      <tr>
        <td>Above The Break</td>
        <td>{prospect.FG_ATB}/{prospect.FG_ATB_POT}</td>
      </tr>
      <tr>
        <td>Free Throw</td>
        <td>{prospect.FT}/{prospect.FT_POT}</td>
      </tr>
    </tbody>
  </table>

  export default ShootingAbility
