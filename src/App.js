import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withFirebase } from './components/Firebase'
import Firebase from './components/Firebase/firebase'

// import CSS files
//import './styles/header/header.css'
import './App.css';
import '../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// import components
import Header from './shared/Header'
import Home from './components/Home/Home'
import DraftClassPage from './components/DraftClass/DraftClass'
//import DraftClassPage from './components/DraftClass/DraftClassPage'
import SendScoutsPage from './components/SendScouts/SendScouts'
import InterviewsPage from './components/Interviews/Interviews'
//import ProspectPage from './components/Prospects/ProspectCard'
import ProspectPage from './components/Prospects/ProspectCard0'
import SignInPage from './components/Authentication/LogIn'
import SignUpPage from './components/Authentication/SignUp'
import AdminPage from './components/Admin/Admin'
import TeamPage from './components/Team/Team'
import BigBoard from './components/BigBoard/BigBoard'

import * as ROUTES from './constants/routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header authUser={this.state.authUser} />
          <div className="container">
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.DRAFT_CLASS} component={DraftClassPage} />
            <Route exact path={ROUTES.BIG_BOARD} component={BigBoard} />
            <Route path={ROUTES.SEND_SCOUTS} component={SendScoutsPage} />
            <Route path={ROUTES.INTERVIEWS} component={InterviewsPage} />
            <Route exact path={ROUTES.PROSPECT} component={ProspectPage} />
            <Route path={ROUTES.LOG_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.DRAFT_CLASS_PAGE} component={DraftClassPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.TEAM_PAGE} component={TeamPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
