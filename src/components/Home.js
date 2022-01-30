import React from "react";
import imgBeers from "../assets/beers.png";
import imgRandomBeer from "../assets/random-beer.png";
import imgNewBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <Link to="/beers">
        <img style={{ width: "100%"}} src={imgBeers} alt="bar of a pub" />
        Show me your Beers!
      </Link>
      <Link to="/random-beers">
        <img style={{ width: "100%"}} src={imgRandomBeer} alt="beer dispensers" />A Random Beer!
      </Link>
      <Link to="/new-beer">
        <img style={{ width: "100%"}} src={imgNewBeer} alt="beer" />
        Add me a new Beer!
      </Link>

    </div>
  );
}

export default Home;
