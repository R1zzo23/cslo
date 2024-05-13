import React from 'react'

const SkillRatings = ({prospect}) =>
<table className="table table-bordered skill-table">
  <thead className='thead-dark'>
    <tr className='highlighted-row'>
      <th className='column-group' colSpan="2">Inside Rates</th>
      <th className='column-group' colSpan="6">Shooting Rates</th>
      <th className='column-group' colSpan="11">Other Skill Ratings</th>
    </tr>
    <tr>
      <th>Dunk</th>
      <th>Rim Area</th>
      <th>Res. Area</th>
      <th>Paint</th>
      <th>Mid</th>
      <th>Corner</th>
      <th>ATB</th>
      <th>FT</th>
      <th>SCR</th>
      <th>PAS</th>
      <th>HDL</th>
      <th>ORB</th>
      <th>DRB</th>
      <th>BLK</th>
      <th>STL</th>
      <th>DRFL</th>
      <th>DEF</th>
      <th>DIS</th>
      <th>IQ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{prospect.DunkRate}</td>
      <td>{prospect.RARate}</td>
      <td>{prospect.FG_RA}/{prospect.FG_RA_POT}</td>
      <td>{prospect.FG_ITP}/{prospect.FG_ITP_POT}</td>
      <td>{prospect.FG_MID}/{prospect.FG_MID_POT}</td>
      <td>{prospect.FG_COR}/{prospect.FG_COR_POT}</td>
      <td>{prospect.FG_ATB}/{prospect.FG_ATB_POT}</td>
      <td>{prospect.FT}/{prospect.FT_POT}</td>
      <td>{prospect.Scoring}/{prospect.Scoring_POT}</td>
      <td>{prospect.Passing}/{prospect.Passing_POT}</td>
      <td>{prospect.Handling}/{prospect.Handling_POT}</td>
      <td>{prospect.OReb}/{prospect.OReb_POT}</td>
      <td>{prospect.DReb}/{prospect.DReb_POT}</td>
      <td>{prospect.Block}/{prospect.Block_POT}</td>
      <td>{prospect.Steal}/{prospect.Steal_POT}</td>
      <td>{prospect.DrawFoul}/{prospect.DrawFoul_POT}</td>
      <td>{prospect.Defender}/{prospect.Defender_POT}</td>
      <td>{prospect.Discipline}/{prospect.Discipline_POT}</td>
      <td>{prospect.BballIQ}/{prospect.BballIQ_POT}</td>
    </tr>
  </tbody>
</table>

export default SkillRatings
