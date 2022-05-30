import React from "react";
import { Link } from "react-router-dom";
import BeersImg from "../assets/beers.png";
import NewBeerImg from "../assets/new-beer.png";
import RandomBeerImg from "../assets/random-beer.png";

function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/beers">
        <h2>All Beers</h2>
        <img src={BeersImg} alt="beers" />
      </Link>
      <Link to="/random-beer">
        <h2>Random Beer</h2>
        <img src={NewBeerImg} alt="new beer" />
      </Link>
      <Link to="/new-beer">
        <h2>New Beer</h2>
        <img src={RandomBeerImg} alt="random beer" />
      </Link>
    </div>
  );
}

export default HomePage;
