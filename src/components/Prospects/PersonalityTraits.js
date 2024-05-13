import React from 'react'

const PersonalityTraits = ({prospect}) =>
  <table className="table table-bordered">
    <thead className='thead-dark'>
      <tr className='text-center'>
        <th>Personality Trait</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Consistency</td>
        <td>{prospect.Consistency}</td>
      </tr>
      <tr>
        <td>Greed</td>
        <td>{prospect.Greed}</td>
      </tr>
      <tr>
        <td>Loyalty</td>
        <td>{prospect.Loyalty}</td>
      </tr>
      <tr>
        <td>Play For Winner</td>
        <td>{prospect.PlayForWinner}</td>
      </tr>
      <tr>
        <td>Playing Time</td>
        <td>{prospect.PlayingTime}</td>
      </tr>
      <tr>
        <td>Personality</td>
        <td>{prospect.Personality}</td>
      </tr>
      <tr>
        <td>Durability</td>
        <td>{prospect.Durability}</td>
      </tr>
      <tr>
        <td>Work Ethic</td>
        <td>{prospect.WorkEthic}</td>
      </tr>
    </tbody>
  </table>

  export default PersonalityTraits
