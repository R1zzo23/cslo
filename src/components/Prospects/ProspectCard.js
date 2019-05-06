import React from 'react'
import '@firebase/firestore'
import { withFirebase } from '../Firebase'
import {BasicInfo} from './BasicInfo'
import PersonalityTraits from './PersonalityTraits'
import class24 from '../DraftClass/2024CSLDraftBasic.json'
import ShootingAbility from './ShootingAbility'
import BallActions from './BallActions'
import SkillRatings from './SkillRatings'

const ProspectPage = ({firebase}) => (
  <div>
    <ProspectInfo firebase={firebase}/>
  </div>
);

class ProspectCard extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    let scouts = [];

    const urlString = window.location.href;
    var segments = urlString.split('/');
    var fullNameLowerCase = segments[segments.length - 1];
    // email to search collection for documents
    var userEmail = this.props.firebase.auth.currentUser.email;

    const fire = this.props.firebase;
    const db = fire.auth.app.firebase_.firestore();

    db.collection("scouts").where("Email", "==", userEmail).where("FullNameLowerCase", "==", fullNameLowerCase)
    .get()
    .then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        // add each scout to array
        scouts.push(doc.data());
      });
      this.setState({
        data: scouts
      });
    });
  }
  render() {
    const urlString = window.location.href;
    var segments = urlString.split('/');
    var fullNameLowerCase = segments[segments.length - 1];
    //const fullName = this.props.match.params.id;
    const i = class24.findIndex((prospect) => ((prospect.LastName + prospect.FirstName).toLowerCase().replace(/[, ']+/g, "").trim()) === fullNameLowerCase);
    const prospect = class24[i];

    return (
      <div>{(this.state.data !== []) ? <ProspectData data={this.state.data} prospect={prospect}/> : <NoData />}</div>
    );
  }
};

const ProspectData = ({data, prospect}) => (
  <div>
    <div className='row'>
      <div className='col-md-12'>
        <BasicInfo prospect={prospect} />
      </div>
    </div>
    <br />
    <div className='row justify-content-center'>
      <div className='col-md-3 col-sm-12'>
        <PersonalityTraits prospect={data} />
      </div>
      <div className='col-md-3 col-sm-12'>
        <ShootingAbility prospect={data} />
      </div>
      <div className='col-md-3 col-sm-12'>
        <BallActions prospect={data} />
      </div>
    </div>
    <div className='row skill-row'>
      <div className='col-md-12'>
        <SkillRatings prospect={data} />
      </div>
    </div>
  </div>
);

const NoData = () => (
  <h6>No Data</h6>
);

export default ProspectPage;

const ProspectInfo = withFirebase(ProspectCard);

export {ProspectInfo};
