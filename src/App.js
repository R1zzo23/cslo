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
        <div className="container">
          <p>AJRDesigns.com</p>
        </div>
      </div>
    );
  }
}

export default App;
