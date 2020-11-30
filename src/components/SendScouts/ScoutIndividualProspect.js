import React from 'react'
import class24 from '../DraftClass/2024CSLDraftBasic.json'
import class25 from '../DraftClass/2025_basic.json'
import class26 from '../DraftClass/2026_basic.json'

const ScoutIndividualProspect = ({key}) =>
  <div>
    <select key={key} className='selection'>
    { class26.map((prospect, i) =>
      <option key={i}
              firstname={prospect.FirstName}
              lastname={prospect.LastName}>
                  {prospect.LastName}, {prospect.FirstName}
      </option>
    )}
    </select>
  </div>

export default ScoutIndividualProspect
