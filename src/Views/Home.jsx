import React from 'react';
import allBeersImg from './../assets/beers.png';
import randomBeerImg from './../assets/random-beer.png';
import newBeerImg from './../assets/new-beer.png';

import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={allBeersImg} alt="all-beers"></img>
        <h1>
          <Link to="/beers">All the beers!</Link>
        </h1>
        <p>Discover all the beers that are available</p>

        <img src={randomBeerImg} alt="random-beer"></img>
        <h1>
          <Link to="/beers/random">Random beer !</Link>
        </h1>
        <p>Discover a random beer !</p>

        <img src={newBeerImg} alt="new-beer"></img>
        <h1>
          <Link to="/beers/new">Your new beer</Link>
        </h1>
        <p>Add your new beer!</p>
      </div>
    );
  }
}

export default Home;
