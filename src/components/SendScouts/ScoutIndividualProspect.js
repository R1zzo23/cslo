import React from 'react'
import class24 from '../DraftClass/2024CSLDraftBasic.json'
import class25 from '../DraftClass/2025_basic.json'
import class26 from '../DraftClass/2026_basic.json'
import class27 from '../DraftClass/2027_basic.json'
import class28 from '../DraftClass/2028_basic.json'
import class29 from '../DraftClass/2029_basic.json'
import class30 from '../DraftClass/2030_basic.json'
import class31 from '../DraftClass/2031_basic.json'
import class32 from '../DraftClass/2032_basic.json'
import class33 from '../DraftClass/2033_basic.json'
import class34 from '../DraftClass/2034_basic.json'
import class35 from '../DraftClass/2035_basic.json'

const ScoutIndividualProspect = ({key}) =>
  <div>
    <select key={key} className='selection'>
    { class35.map((prospect, i) =>
      <option key={i}
              firstname={prospect.FirstName}
              lastname={prospect.LastName}>
                  {prospect.LastName}, {prospect.FirstName}
      </option>
    )}
    </select>
  </div>

export default ScoutIndividualProspect
