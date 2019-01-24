import React from 'react'
import BasicInfo from './BasicInfo'
import PersonalityTraits from './PersonalityTraits'
import class24 from '../DraftClass/2024class.json'

export class ProspectCard extends React.Component {
  render() {
    const fullName = this.props.match.params.id;
    const i = class24.findIndex((prospect) => (prospect.FirstName + '-' + prospect.LastName) === fullName);
    const prospect = class24[i];

    return (
        <div>
            <p>{this.props.match.params.id}</p>
            <p>Player Name: {prospect.FirstName} {prospect.LastName}</p>
            <p>Height: {prospect.DisplayHeight}</p>
        </div>
    );
  }
};
