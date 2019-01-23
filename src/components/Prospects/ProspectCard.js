import React from 'react'
import BasicInfo from './BasicInfo'
import PersonalityTraits from './PersonalityTraits'
import class24 from '../DraftClass/2024class.json'

export class ProspectCard extends React.Component {
  render() {
    console.log(this.props.match.params.id);
    return (
        <div>
            <p>{this.props.match.params.id}</p>
            <p>Player Name: {this.props.FirstName}</p>
        </div>
    );
  }
};

/*const ProspectCard = () =>
  <div>
    <h1>Prospect Card</h1>
  </div>

  export default ProspectCard*/
