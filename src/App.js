import React, { Component } from 'react';
import logo from './logo.svg';
import About from './components/About/About'
import Contact from './components/Contact/Contact'

// import CSS files
//import './styles/header/header.css'
import './App.css';

// import components
import Header from './shared/Header'
import Footer from './shared/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
