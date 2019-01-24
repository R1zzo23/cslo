import React from 'react'
import BasicInfo from './BasicInfo'
import PersonalityTraits from './PersonalityTraits'
import class24 from '../DraftClass/2024class.json'

export class ProspectCard extends React.Component {
  render() {
    console.log(this.props.match.params.id);
    const i = this.props.match.params.id;
    console.log(class24[i]);
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
