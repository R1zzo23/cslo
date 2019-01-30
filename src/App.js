import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ReactTable from 'react-table'
import logo from './logo.svg';

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
import {LogIn} from './components/Authentication/LogIn'
import SignUpPage from './components/Authentication/SignUp'

import * as ROUTES from './constants/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.DRAFT_CLASS} component={DraftClass} />
            <Route path={ROUTES.SEND_SCOUTS} component={SendScouts} />
            <Route path={ROUTES.PROSPECT} component={ProspectCard} />
            <Route path={ROUTES.LOG_IN} component={LogIn} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
