import beersPng from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"
import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div>
        <img src={beersPng} alt="BeerImg" />
        <Link to="/beers">
          {" "}
          <h4>All Beers</h4>{" "}
        </Link>
      </div>
      <div>
        <img src={randomBeer} alt="BeerImg" />
        <Link to="/random-beer">
          {" "}
          <h4>Random Beer</h4>{" "}
        </Link>
      </div>
      <div>
        <img src={newBeer} alt="BeerImg" />
        <Link to="/new-beer">
          {" "}
          <h4>New Beer</h4>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
