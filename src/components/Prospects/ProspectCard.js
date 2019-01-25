import React from 'react'
import {BasicInfo} from './BasicInfo'
import PersonalityTraits from './PersonalityTraits'
import class24 from '../DraftClass/2024class.json'
import ShootingAbility from './ShootingAbility'
import BallActions from './BallActions'

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
          <div className='row'>
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
        </div>
    );
  }
};
