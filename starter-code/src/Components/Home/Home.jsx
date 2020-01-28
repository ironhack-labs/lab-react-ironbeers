import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import NavBar from '../NavBar/Navbar';

export default function Home(props) {
  return (
    <div className="home-list">
      <div className="image-container">
        <Link to="/beers" className="home-list beers">
          <div className="text">
            <h1>All Beers</h1>
            <p>see full list of beers</p>
          </div>
        </Link>
      </div>
      <div className="image-container">
        <Link
          to="/random-beer"
          className="random-beer home-list"
          onClick={props.getRandomBeer}
        >
          <div className="text">
            <h1>Random Beer</h1>
            <p>pick a̶n̶ A̶m̶a̶n̶d̶a̶ random beer</p>
          </div>
        </Link>
      </div>
      <div className="image-container">
        <Link to="/new-beer" className="home-list new-beer">
          <div className="text">
            <h1>New beer</h1>
            <p>add a new beer to our API! anything but Amanda, please</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
