import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import allBeersImg from '../images/beers.png';
import newBeerImg from '../images/new-beer.png';
import randomBeerImg from '../images/random-beer.png';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <>
        <div className = "homeContainer">
          <div className = "homeCard">
              <Link to="/beers">
                <img className="homeImg" src={allBeersImg} alt="" />
                <h2>All beers</h2>
              </Link>
              <p className="homeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className = "homeCard">
              <Link to="/random-beer">
                <img className="homeImg" src={randomBeerImg} alt="" /> 
                <h2>Random Beer</h2>
              </Link>
              <p className="homeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className = "homeCard">
              <Link to="/new-beer">
                <img className="homeImg" src={newBeerImg} alt="" /> 
                <h2>New Beer</h2>
              </Link>
              <p className="homeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;