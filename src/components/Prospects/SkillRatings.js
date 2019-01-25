import React from 'react'

const SkillRatings = ({prospect}) =>
<table className="table table-bordered">
  <thead className='thead-dark'>
    <tr>
      <th>Skill</th>
      <th>Rating</th>
    </tr>
  </thead>

  "FG_RA": 58,
  "FG_ITP": 58,
  "FG_MID": 31,
  "FG_COR": 18,
  "FG_ATB": 67,
  "FT": 0,
  "Scoring": 35,
  "Passing": 40,
  "Handling": 41,
  "OReb": 51,
  "DReb": 61,
  "Block": 52,
  "Steal": 23,
  "DrawFoul": 5,
  "Defender": 54,
  "Discipline": 75,
  "BballIQ": 65,

  <tbody>
    <tr>
      <td>Dunk Rate</td>
      <td>{prospect.DunkRate}</td>
    </tr>
    <tr>
      <td>Rim Area Rate</td>
      <td>{prospect.RARate}</td>
    </tr>
    <tr>
      <td>FG Rim Area</td>
      <td>{prospect.FG_RA}/{prospect.FG_RA_POT}</td>
    </tr>
    <tr>
      <td>FG In The LocPaint</td>
      <td>{prospect.FG_ITP}/{prospect.FG_ITP_POT}</td>
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

export default SkillRatings
