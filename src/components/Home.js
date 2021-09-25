import React from 'react';

import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

import Card from './Cards/HomeCard';

function Home() {
  return (
    <div className="container pt-2">
      <Card image={beers} name="All Beers" to="/beers" />
      <Card image={randomBeer} name="Random Beer" to="/beers/random" />
      <Card image={newBeer} name="New Beer" to="/new-beer" />
    </div>
  );
}

export default Home;
