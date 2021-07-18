import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/beer">
          <img src={beers} alt="Beer" />
          <h1>Beer</h1>
        </Link>
        <Link to="/random-beer">
          <img src={randomBeer} alt="Beer" />
          <h1>Random Beer</h1>
        </Link>
        <Link to="/new-beer">
          <img src={newBeer} alt="Beer" />
          <h1>New Beer</h1>
        </Link>
      </div>
    );
  }
}

export default Home;
