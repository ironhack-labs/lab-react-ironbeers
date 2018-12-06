import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beers from "./Components/Beers/Beers";
import RandonBeers from "./Components/RandomBeer/RandomBeer";
import NewBeer from "./Components/NewBeer/NewBeer"


class App extends Component {
  render() {
    return (
      <div className="App">
      <Beers/>
      <RandonBeers/>
      <NewBeer/>
      </div>
    );
  }
}

export default App;
