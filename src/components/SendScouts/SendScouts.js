import React from 'react'
import ScoutIndividualProspect from './ScoutIndividualProspect'

export class SendScouts extends React.Component{
  render(){
    var scoutPoints = 10;
    var selectProspects = [];

    for (var i = 0; i < scoutPoints; i++) {
      selectProspects.push(<ScoutIndividualProspect key={i}/>);
    }

    return (
      <div>
        <h3>Number of Available Scouts: {scoutPoints}</h3>
        {selectProspects}
        <br />
        <button className='btn'>Send Scouts</button>
        <br />
        <br />
        <div className='row'>
          <h4>Developer Notes:</h4>
          <ul>
            <li>Admin will be able to update each individual team's # of scouting points</li>
            <li>The # of selection drop down boxes shown above will be equal to team's scouting points</li>
            <li>Clicking 'Send Scouts' button will save options [not operational yet]</li>
            <li>Will be able to change your scout selections until scouts are run by an admin</li>
          </ul>
        </div>
      </div>
    );
  }
};
