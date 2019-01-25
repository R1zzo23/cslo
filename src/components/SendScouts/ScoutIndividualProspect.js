import React from 'react'
import class24 from '../DraftClass/2024class.json'

const ScoutIndividualProspect = () =>
  <div>
    <select className='selection'>
    { class24.map((prospect, i) =>
      <option key={i}>{prospect.LastName}, {prospect.FirstName}</option>
    )}
    </select>
  </div>

export default ScoutIndividualProspect
