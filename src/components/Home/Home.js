import React from 'react'

const Home = () =>
  <div>
    <div id='home-component'>
      <div id='home-component-background'>
        <h1 className="welcome">Welcome to CSL Online!</h1>
        <a href="http://championsimleague.com/viewtopic.php?f=15&t=9410" target="_blank"><h6>Click here for scouting system details!</h6></a>
        <br />
        <img className='logo' id='logo' alt='CSL Online logo' src='/img/cslo-logo.png' />
      </div>
    </div>
    <br />
    <div className='row'>
      <div className='col-sm-12 text-center'>
        <img width="800" src='/img/luka-zion.jpg' />
      </div>
    </div>
  </div>

  export default Home
