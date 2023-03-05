import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/random-beer.png";
import randomBeer from "../assets/new-beer.png";

const HomePage = () => {
  return (
    <div className="homepage-section">
      <div className="homepage-container">
        <img className="homepage-img" src={beers} alt={beers} />
        <Link className="homepage-link" to="/beers">
          All Beers
        </Link>
        <p className="homepage-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="homepage-container">
        <img className="homepage-img" src={newBeer} alt={newBeer} />
        <Link className="homepage-link" to="/new-beer">
          New Beer
        </Link>
        <p className="homepage-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="homepage-container">
        <img className="homepage-img" src={randomBeer} alt={randomBeer} />
        <Link className="homepage-link" to="/random-beer">
          Random Beer
        </Link>
        <p className="homepage-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
