import React from 'react'
import class24 from './2024class.json'
import ProspectInfo from './ProspectInfo'

const DraftClass = () =>
  <div>
    <div className='row'>
      <h4>Developer Notes:</h4>
      <ul>
        <li>Will get info into formatted table</li>
        <li>Will customize URL to match each class specifically</li>
        <li>Each table row will be clickable to send direct to player card</li>
      </ul>
    </div>
    <br />
    <h1>2024 CSL Draft Class</h1>
    { class24.map((prospect, i) =>
      <ProspectInfo key={i} id={i} {...prospect} />
    )}
  </div>

  export default DraftClass
