import React from 'react'

const Home = () =>
  <div>
    <div id='home-component'>
      <div id='home-component-background'>
        <h1 className="welcome">Welcome to CSL Online!</h1>
        <br />
        <img className='logo' id='logo' src='/img/cslo-logo.png' />
      </div>
    </div>
    <br />
    <div className='row'>
      <h4>Developer Notes:</h4>
      <ul>
        <li>Scouting system to be written here</li>
        <li>Eight scouting periods: one per month from November-June</li>
        <li>Ten scouts per period</li>
        <li>Double scouting periods for 4th (Feb) and 8th (Jun) period </li>
        <li>Workouts, Interviews & Draft Combine stay the same</li>
      </ul>
    </div>
  </div>

  export default Home
