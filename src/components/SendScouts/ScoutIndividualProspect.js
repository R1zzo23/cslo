import React from 'react'
import class24 from '../DraftClass/2024class.json'

const ScoutIndividualProspect = ({key}) =>
  <div>
    <select key={key} className='selection'>
    { class24.map((prospect, i) =>
      <option key={i}
              firstname={prospect.FirstName}
              lastname={prospect.LastName}>
                  {prospect.LastName}, {prospect.FirstName}
      </option>
    )}
    </select>
  </div>

export default ScoutIndividualProspect
