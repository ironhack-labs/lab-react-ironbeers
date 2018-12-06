import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Allbeers from './Components/Allbeers/Allbeers';
import NewBeer from './Components/NewBeer/NewBeer';
import RandomBeer from './Components/RandomBeer/RandomBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Allbeers />
        <RandomBeer />
        <NewBeer />
      </div>
    );
  }
}

export default App;
