import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes/>
      </div>
    )
  }
}

export default App;
