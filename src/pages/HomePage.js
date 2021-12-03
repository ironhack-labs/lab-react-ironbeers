import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from './../assets/beers.png';
import randomBeerImg from './../assets/random-beer.png';
import newBeerImg from './../assets/new-beer.png'
import Header from '../components/Header';

function HomePage() {
  return (
    <div>
    <Header />
      {/* Links to other pages */}
      <Link to="/beers">
        <div>
          <img src={beersImg} alt="" />
          <h2>All Beers</h2>
        </div>
      </Link>

      <Link to="/random-beer">
        <div>
          <img src={randomBeerImg} alt="" />
          <h2>Random beer</h2>
        </div>
      </Link>

      <Link to="/new-beer">
        <div>
        <img src={newBeerImg} alt=""/>
          <h2>New beer</h2>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
