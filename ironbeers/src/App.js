import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from './Routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headerbar">
           <a href="/" >Home</a> 
        </div>

        <div className="home-buttons">
          <div> <a href="/beers">All Beers</a> </div>
          <div> <a href="/newbeer">New Beers</a> </div>
          <div> <a href="/randombeer">Random Beers</a> </div>
        </div>

        <Routes />
      </div>
    );
  }
}

export default App;
