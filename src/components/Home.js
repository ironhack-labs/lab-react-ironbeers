import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import allBeers from './../assets/beers.png';
import randomBeer from './../assets/random-beer.png';
import newBeer from './../assets/new-beer.png';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="beer-box">
          <img src={allBeers} alt="beer-picture1"/>
          <Link to="/beers">
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Link>
        </div>

        <div className="beer-box">
          <img src={randomBeer} alt="beer-picture2" />
          <Link to="/random">
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Link>
        </div>

        <div className="beer-box">
          <img src={newBeer} alt="beer-picture3" />
          <Link to="/new-beer">
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
