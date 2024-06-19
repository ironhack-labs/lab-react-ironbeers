import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';

function HomePage() {
  return (
    <div className="home-page">
      <Link to="/beers" className="home-link">
        <img src={beersImage} alt="All Beers" />
        <div className="home-link-text">
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
        </div>
      </Link>
      <Link to="/random-beer" className="home-link">
        <img src={randomBeerImage} alt="Random Beer" />
        <div className="home-link-text">
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
        </div>
      </Link>
      <Link to="/new-beer" className="home-link">
        <img src={newBeerImage} alt="New Beer" />
        <div className="home-link-text">
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
