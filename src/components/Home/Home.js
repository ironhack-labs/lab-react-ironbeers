import React from 'react';
import beers from '../../assets/beers.png';
import random from '../../assets/random-beer.png';
import newBeer from '../../assets/new-beer.png';
import { Link } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';
import './Home.css';

const Home = () => {
  return (
    <div className="col">
      <div className="list-group">
        <img src={beers} alt="beers" />
        <Link to="/beers">
          <h2>All beers</h2>
        </Link>
        <LoremIpsum p={1} />
      </div>
      <div className="list-group">
        <img src={random} alt="random" />
        <Link to="/random-beer">
          <h2>Random beer</h2>
        </Link>
        <LoremIpsum p={1} />
      </div>
      <div className="list-group">
        <img src={newBeer} alt="random" />
        <Link to="/new-beer">
          <h2>New beer</h2>
        </Link>
        <LoremIpsum p={1} />
      </div>
    </div>
  );
};

export default Home;
