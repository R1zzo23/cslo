import React from 'react'
import '@firebase/firestore'
import { withFirebase } from '../Firebase'

const BigBoard = ({firebase}) => (
  <div>
    <BigBoardHQ firebase={firebase}/>
  </div>
);

class Board extends React.Component{
  constructor(props: IProps) {
    super(props);
    this.state = {
      prospectData: []
    };
  }
  positionNumberToAbbreviation(x) {
    if (x == 1) return "PG";
    else if (x == 2) return "SG";
    else if (x == 3) return "SF";
    else if (x == 4) return "PF";
    else return "C";
  }
  componentDidMount() {
    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    let prospects = [];

    // grab all scouts for this franchise
    db.collection("class2025")
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        // add each prospect to array
        prospects.push(doc.data());
      });
      // sort scouts array by BigBoard placement
      prospects.sort((a, b) => (a.BigBoardCurrent > b.BigBoardCurrent) ? 1 : (a.BigBoardCurrent === b.BigBoardCurrent) ? ((a.LastName > b.LastName) ? 1 : -1) : -1 )
      prospects.forEach((player) => {
        //var PositionName;
        if (player.Position == 1) player.PositionName = "PG";
        else if (player.Position == 2) player.PositionName = "SG";
        else if (player.Position == 3) player.PositionName = "SF";
        else if (player.Position == 4) player.PositionName = "PF";
        else player.PositionName = "C";
      });
      this.setState({
        prospectData: prospects
      });
    });
  }

  render(){
    const bigBoardTable = (
      <div>
        <table id='bigBoardTable' className="table table-sm table-striped">
          <thead>
            <tr>
              <th className="player-info" scope="col">RANK</th>
              <th className="player-info" scope="col">CHANGE</th>
              <th className="player-info" scope="col">FIRST</th>
              <th className="player-info" scope="col">LAST</th>
              <th className="player-info" scope="col">AGE</th>
              <th className="player-info" scope="col">POS</th>
              <th className="player-info" scope="col">HEIGHT</th>
              <th className="player-info" scope="col">WEIGHT</th>
            </tr>
          </thead>
          <tbody>
            {this.state.prospectData.map((prospect, index) => (
              <tr>
                <td>{prospect.BigBoardCurrent}</td>
                <td>{prospect.BigBoardChange}</td>
                <td>{prospect.FirstName}</td>
                <td>{prospect.LastName}</td>
                <td>{prospect.Age}</td>
                <td>{prospect.PositionName}</td>
                <td>{prospect.DisplayHeight}</td>
                <td>{prospect.Weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    return (
      <div>
        <h1>Big Board</h1>
        {bigBoardTable}
      </div>
    )
  }
};

export default BigBoard;

const BigBoardHQ = withFirebase(Board);

export {BigBoardHQ};
