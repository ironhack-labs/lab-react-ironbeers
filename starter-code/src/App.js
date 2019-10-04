import React, { Component } from 'react';

import './App.css';
import Beers from './components/beers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Beers name="All beers" img="./images/beers.png" link="/beers"/>
        <Beers name="Random beers" img="./images/random-beer.png" link="/random-beer"/>
        <Beers name="New Beer" img="./images/new-beer.png" link="/new-beer"/>
      </div>
    );
  }
}

export default App;
