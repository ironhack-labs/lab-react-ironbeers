import React from 'react';
import { Link } from 'react-router-dom';
import HomeBeerCard from '../components/HomeBeerCard';

import allBeers from '../assets/img/allBeers.jpg';
import randomBeer from '../assets/img/randomBeer.jpg';
import newBeer from '../assets/img/newBeer.jpg';

const HomePage = () => {
  return (
    <div>
      <Link to="/beers">
        <HomeBeerCard title={'All Beers'} picture={allBeers} />
      </Link>
      <Link to="/random-beer">
        <HomeBeerCard title={'Random Beer'} picture={randomBeer} />
      </Link>
      <Link to="/new-beer">
        <HomeBeerCard title={'New Beer'} picture={newBeer} />
      </Link>
    </div>
  );
};

export default HomePage;
