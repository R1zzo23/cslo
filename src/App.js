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
import {DraftClass} from './components/DraftClass/DraftClass'
import {SendScouts} from './components/SendScouts/SendScouts'
import {ProspectCard} from './components/Prospects/ProspectCard'
import SignInPage from './components/Authentication/LogIn'
import SignUpPage from './components/Authentication/SignUp'

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
            <Route path={ROUTES.DRAFT_CLASS} component={DraftClass} />
            <Route
              path={ROUTES.DRAFT_CLASS}
              render={() => <DraftClass {...this.props} user={this.state}/>}
            />
            <Route path={ROUTES.SEND_SCOUTS} component={SendScouts} />
            <Route path={ROUTES.PROSPECT} component={ProspectCard} />
            <Route path={ROUTES.LOG_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
