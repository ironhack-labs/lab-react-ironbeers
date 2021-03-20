import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beers from './components/Beers';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
// IH CLASS

// import About from './components/XXXAbout';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />
    
    </div>
    );
  }
}
 
export default App;