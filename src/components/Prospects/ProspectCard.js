import React from 'react'
import {BasicInfo} from './BasicInfo'
import PersonalityTraits from './PersonalityTraits'
import class24 from '../DraftClass/2024class.json'
import ShootingAbility from './ShootingAbility'
import BallActions from './BallActions'
import SkillRatings from './SkillRatings'

export class ProspectCard extends React.Component {
  render() {
    const fullName = this.props.match.params.id;
    const i = class24.findIndex((prospect) => (prospect.FirstName + '-' + prospect.LastName) === fullName);
    const prospect = class24[i];

    return (
        <div>
          <div className='row'>
            <div className='col-md-12'>
              <BasicInfo prospect={prospect} />
            </div>
          </div>
          <br />
          <div className='row justify-content-center'>
            <div className='col-md-3 col-sm-12'>
              <PersonalityTraits prospect={prospect} />
            </div>
            <div className='col-md-3 col-sm-12'>
              <ShootingAbility prospect={prospect} />
            </div>
            <div className='col-md-3 col-sm-12'>
              <BallActions prospect={prospect} />
            </div>
          </div>
          <div className='row skill-row'>
            <div className='col-md-12'>
              <SkillRatings prospect={prospect} />
            </div>
          </div>
          <br />
          <div className='row'>
            <h4>Developer Notes:</h4>
            <ul>
              <li>Skill rating table [very bottom] is currently populated with actual Ratings</li>
              <li>Idea is skill rating table will add new row for each scout you send for this player</li>
              <li>Every scout will add new row with deviations from scouting report</li>
              <li>Idea: if scouts achieve highest and lowest possible deviation, true rating will be revealed</li>
            </ul>
          </div>
        </div>
    );
  }
};
