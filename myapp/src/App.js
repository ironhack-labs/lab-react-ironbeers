import React, { Component } from 'react';
import './App.css';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Beers/>
        <RandomBeer></RandomBeer>
        <NewBeer></NewBeer>
      </div>
    );
  }
}

export default App;
