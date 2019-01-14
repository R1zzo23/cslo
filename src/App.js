import React, { Component } from 'react';
import logo from './logo.svg';

// import CSS files
//import './styles/header/header.css'
import './App.css';

// import components
import Header from './shared/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        I am APP COMPONENT
      </div>
    );
  }
}

export default App;
