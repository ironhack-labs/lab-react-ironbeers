import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>App Crib 🏞</h1>
        <h2>Home of the beer 🍺</h2>
        <div>
          <Link to="/beers">
            <img src="/assets/beers.png" alt="beers" />
            <h3>All Beers</h3>
          </Link>
          <p>Best beers in the world perfectly curated for you</p>
        </div>
        <div>
          <Link to="/random-beer">
            <img src="/assets/random-beer.png" alt="random-beers" />
            <h3>Random Beer</h3>
          </Link>
          <p>Get the best random beer humanly possible</p>
        </div>
        <div>
          <Link to="/new-beer">
            <img src="/assets/new-beer.png" alt="new-beer" />
            <h3>New Beer</h3>
          </Link>
          <p>The newest best thing is here</p>
        </div>
      </div>
    );
  }
}
