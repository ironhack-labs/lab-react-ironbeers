import React from "react";
import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeersImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <div className="container">
        <Link to={`/beers`}>
          <img src={beersImg} alt="beers" />
        </Link>
        <h3>All Beers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="container">
        <Link to={`/random-beer`}>
          <img src={randomBeersImg} alt="random beer" />
        </Link>
        <h3>Random Beer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="container">
        <Link to={`/new-beer`}>
          <img src={newBeerImg} alt="new beer" />
        </Link>
        <h3>New Beer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>
      </div>
    </div>
  );
}

export default HomePage;
