import React from "react";
import { Link } from "react-router-dom";
import BeersImg from "../assets/beers.png";
import NewBeerImg from "../assets/new-beer.png";
import RandomBeerImg from "../assets/random-beer.png";

function Homepage() {
  return (
    <div>
      <Link className="home-link" to="/beers">
        <img src={BeersImg} alt="" />
        <h3>All Beers</h3>
      
     </Link>
      <Link className="home-link" to="/new-beer">
        <img src={NewBeerImg} alt="" />
        <h3>New Beers</h3>
      </Link>
      <Link className="home-link" to="/random-beer">
        <img src={RandomBeerImg} alt="" />
        <h3>Random Beers</h3>
      </Link>
    </div>
  );
}

export default Homepage;