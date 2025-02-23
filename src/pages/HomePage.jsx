import React from 'react';
import { Link } from 'react-router-dom';
import allBeers from '../assets/beers.png'; 
import randomBeer from '../assets/random-beer.png'; 
import newBeer from '../assets/new-beer.png';

const HomePage = () => {
  return (
    <div className="homepage">
      <br/>
      <div className="links-container">
        <Link to="/beers" className="homepage-link">
          <img src={allBeers} alt="All Beers" />
          <h2>All Beers</h2>
        </Link>
        <Link to="/random-beer" className="homepage-link">
          <img src={randomBeer} alt="Random Beer" />
          <h2>Random Beer</h2>
        </Link>
        <Link to="/new-beer" className="homepage-link">
          <img src={newBeer} alt="New Beer" />
          <h2>New Beer</h2>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
