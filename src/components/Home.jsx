import React from "react";
import { Link } from "react-router-dom";
import BeersImage from "../assets/beers.png";
import NewBeersImage from "../assets/new-beer.png";
import RandomBeersImage from "../assets/random-beer.png";

function Home() {
  return (
    <div>
      <Link to="/beers">
        <img src={BeersImage} alt="" />
        <p>All Beers</p>
      </Link>
      <Link to="/new-beer">
        <img src={NewBeersImage} alt="" />
        <p>New Beers</p>
      </Link>
      <Link to="/random-beer">
        <img src={RandomBeersImage} alt="" />
        <p>Random Beers</p>
      </Link>
    </div>
  );
}

export default Home;
