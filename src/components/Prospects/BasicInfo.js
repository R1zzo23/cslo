import React from 'react'

export class BasicInfo extends React.Component {

    render() {
      var positionName = '';
      const prospect = this.props.prospect;
      var positionNumber = prospect.Position;
      if (positionNumber === 1){
        positionName = "Point Guard";
      }
      else if (positionNumber === 2) {
        positionName = "Shooting Guard";
      }
      else if (positionNumber === 3) {
        positionName = "Small Forward";
      }
      else if (positionNumber === 4) {
        positionName = "Power Forward";
      }
      else if (positionNumber === 5) {
        positionName = "Center";
      }

      return (
        <div className='text-center'>
          <h1>{prospect.FirstName} {prospect.LastName}</h1>
          <h5>{positionName} from {prospect.College}</h5>
          <h6>{prospect.Age} years old &#8226; {prospect.DisplayHeight} &#8226; {prospect.Weight} pounds</h6>
        </div>
      );
    }
  };
