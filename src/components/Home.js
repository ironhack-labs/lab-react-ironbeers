import React from 'react';
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to IronBeers!</h1>
      <div className="links">
        <div className="link">
          <img src={beersImage} alt="All Beers" />
          <Link to="/beers">All Beers</Link>
        </div>
        <div className="link">
          <img src={randomBeerImage} alt="Random Beer" />
          <Link to="/random-beer">Random Beer</Link>
        </div>
        <div className="link">
          <img src={newBeerImage} alt="New Beer" />
          <Link to="/new-beer">New Beer</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

