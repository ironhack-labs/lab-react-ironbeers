import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../../../assets/beers.png';
import randomBeer from '../../../assets/random-beer.png';
import newBeer from '../../../assets/new-beer.png';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div>
        <Link to={'/beers'} className="beers-container">
          <img src={beers} alt="a bar full of beers" />
          All Beers
        </Link>
      </div>
      <div>
        <Link to={'/random-beer'} className="beers-container">
          <img src={randomBeer} alt="beer grifos" />
          Random Beer
        </Link>
      </div>
      <div>
        <Link to={'/new-beer'} className="beers-container">
          <img src={newBeer} alt="beer glasses" />
          New Beer
        </Link>
      </div>
    </div>
  );
};

export default Home;
