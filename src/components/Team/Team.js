import React, { Component } from 'react'
import '@firebase/firestore'
import { withFirebase } from '../Firebase'

const TeamPage = ({firebase}) => (
  <div>
    <h1>Team Page</h1>
    <TeamHQ firebase={firebase}/>
  </div>
);

class Team extends React.Component{
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    var userEmail = this.props.firebase.auth.currentUser.email;

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    let scouts = [];

    db.collection("scouts").where("Email", "==", userEmail)
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        console.log(doc.id);
        scouts.push(doc.data());
      });
      scouts.sort((a, b) => (a.LastName > b.LastName) ? 1 : (a.LastName === b.LastName) ? ((a.FirstName > b.FirstName) ? 1 : -1) : -1 )
      this.setState({
        data: scouts
      });
    });
  }
  render(){
    const scoutTable = (
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">FIRST</th>
              <th scope="col">LAST</th>
              <th scope="col">POS</th>
              <th scope="col">DunkRate</th>
              <th scope="col">RARate</th>
              <th scope="col">RIM</th>
              <th scope="col">PAINT</th>
              <th scope="col">MID</th>
              <th scope="col">COR</th>
              <th scope="col">ATB</th>
              <th scope="col">FT</th>
              <th scope="col">SCR</th>
              <th scope="col">PAS</th>
              <th scope="col">HDL</th>
              <th scope="col">ORB</th>
              <th scope="col">DRB</th>
              <th scope="col">BLK</th>
              <th scope="col">STL</th>
              <th scope="col">DRFL</th>
              <th scope="col">DEF</th>
              <th scope="col">DIS</th>
              <th scope="col">IQ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((scout, index) => (
              <tr>
                <td>{scout.FirstName}</td>
                <td>{scout.LastName}</td>
                <td>{scout.Position}</td>
                <td>{scout.DunkRate}</td>
                <td>{scout.RARate}</td>
                <td>{scout.FG_RA}/{scout.FG_RA_POT}</td>
                <td>{scout.FG_ITP}/{scout.FG_ITP_POT}</td>
                <td>{scout.FG_MID}/{scout.FG_MID_POT}</td>
                <td>{scout.FG_COR}/{scout.FG_COR_POT}</td>
                <td>{scout.FG_ATB}/{scout.FG_ATB_POT}</td>
                <td>{scout.FT}/{scout.FT_POT}</td>
                <td>{scout.Scoring}/{scout.Scoring_POT}</td>
                <td>{scout.Passing}/{scout.Passing_POT}</td>
                <td>{scout.Handling}/{scout.Handling_POT}</td>
                <td>{scout.OReb}/{scout.OReb_POT}</td>
                <td>{scout.DReb}/{scout.DReb_POT}</td>
                <td>{scout.Block}/{scout.Block_POT}</td>
                <td>{scout.Steal}/{scout.Steal_POT}</td>
                <td>{scout.DrawFoul}/{scout.DrawFoul_POT}</td>
                <td>{scout.Defender}/{scout.Defender_POT}</td>
                <td>{scout.Discipline}/{scout.Discipline_POT}</td>
                <td>{scout.BballIQ}/{scout.BballIQ_POT}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    return (
      <div>
        {scoutTable}
      </div>
    );
  }
};

export default TeamPage;

const TeamHQ = withFirebase(Team);

export {TeamHQ};
