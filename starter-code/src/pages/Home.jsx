import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Link className="Home-link" to="/ListBeers">
          <img src="../images/beers.png" alt="" className="Home-img" />
          <div className="Home-content">
            <h1 className="Home-heading">All Beers</h1>
            <small className="Home-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </small>
          </div>
        </Link>
        <Link className="Home-link" to="/RandomBeer">
          <img src="../images/random-beer.png" alt="" className="Home-img" />
          <div className="Home-content">
            <h1 className="Home-heading">Random Beer</h1>
            <small className="Home-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </small>
          </div>
        </Link>
        <Link className="Home-link" to="/AddNewBeer">
          <img src="../images/new-beer.png" alt="" className="Home-img" />
          <div className="Home-content">
            <h1 className="Home-heading"> Add a new beer</h1>
            <small className="Home-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </small>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
