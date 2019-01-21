import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';

// import CSS files
//import './styles/header/header.css'
import './App.css';

// import components
import Header from './shared/Header'
import Home from './components/Home/Home'
import DraftClass from './components/DraftClass/DraftClass'
import SendScouts from './components/SendScouts/SendScouts'
import ProspectCard from './components/Prospects/ProspectCard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/draftclass" component={DraftClass} />
            <Route exact path="/sendscouts" component={SendScouts} />
            <Route exact path="/prospectcard" component={ProspectCard} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
