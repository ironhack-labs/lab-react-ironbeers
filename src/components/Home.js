import React from "react";
import {Link} from "react-router-dom"

import imgAllBeers from "../assets/beers.png";
import imgRandomBeer from "../assets/random-beer.png";
import imgNewBeer from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <div className="homeScreenLink">
        <Link to="/beers">
          <img src={imgAllBeers} alt="all beers"></img>
          <h2>All the Beers</h2>
        </Link>
      </div>
      <div className="homeScreenLink">
        <Link to="/random-beer">
          <img src={imgRandomBeer} alt="all beers" />
          <h2>A random Beer</h2>
        </Link>
      </div>
      <div className="homeScreenLink">
        <Link to="/new-beer">
          <img src={imgNewBeer} alt="all beers" />
          <h2>Add a bew Beer</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
