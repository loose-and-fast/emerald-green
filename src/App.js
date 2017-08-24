import React, { Component } from 'react';
import logo from './assets/logo.svg';
//import './App.css';
import Hero from './components/Hero/Hero.js';
import Navbar from './components/Navbar/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Navbar />
      </div>
    );
  }
}

export default App;
