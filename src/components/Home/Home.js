import React from 'react'

const Home = () =>
  <div>
    <div id='home-component'>
      <div id='home-component-background'>
        <img className='logo' id='logo' alt='CSL Online logo' src='/img/cslo-logo.png' />
        <a href="http://championsimleague.com/viewtopic.php?f=15&t=9410" target="_blank"><h6>Click here for scouting system details!</h6></a>
      </div>
    </div>
    <br />
    <div className='row'>
      <div className='col-sm-12 text-center'>
        <table id='scoutTable' className="table table-sm table-striped">
          <thead>
            <tr>
              <th className="scout-system" scope="col">MONTH</th>
              <th className="scout-system" scope="col">SCOUTS DUE BY</th>
              <th className="scout-system" scope="col">REQUIREMENTS</th>
              <th className="scout-system" scope="col">DOUBLE SCOUTING?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Preseason</td>
              <td id="scoutingDeadline1">Jun 13th</td>
              <td>None</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>November</td>
              <td id="scoutingDeadline2">Jun 17th</td>
              <td>None</td>
              <td>No</td>
            </tr>
            <tr>
              <td>December</td>
              <td id="scoutingDeadline3">Jun 23rd</td>
              <td>1 Insider or 2 Wiretaps</td>
              <td>No</td>
            </tr>
            <tr>
              <td>January</td>
              <td id="scoutingDeadline4">TBD</td>
              <td>1 Insider or 2 Wiretaps</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>February</td>
              <td id="scoutingDeadline5">TBD</td>
              <td>2025 CSL Draft Article</td>
              <td>No</td>
            </tr>
            <tr>
              <td>March</td>
              <td id="scoutingDeadline6">TBD</td>
              <td>1 Insider or 2 Wiretaps</td>
              <td>No</td>
            </tr>
            <tr>
              <td>April</td>
              <td id="scoutingDeadline7">TBD</td>
              <td>1 Insider or 2 Wiretaps</td>
              <td>No</td>
            </tr>
            <tr>
              <td>May</td>
              <td id="scoutingDeadline8">TBD</td>
              <td>1 Insider or 2 Wiretaps</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-12 text-center'>
        <img id='shai' width="640" src='/img/shai.jpg' />
      </div>
    </div>
  </div>

  export default Home
