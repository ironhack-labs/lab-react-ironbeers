import React from "react";
import { Link } from "react-router-dom";
import beerImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

function HomePage() {
  return (
    <ul className="beerList">
      <li>
        <img src={beerImg} alt="home gif" className="page-img" />
        <Link to="/random-beer">random-beer</Link>
      </li>

      <li>
        <img src={newBeerImg} alt="home gif" className="page-img" />
        <Link to="/new-beer"> new-beer </Link>
      </li>

      <li>
        <img src={randomBeerImg} alt="home gif" className="page-img" />
        <Link to="/beers"> beers </Link>
      </li>

      <li>
        <Link to="/beers/:beerId"> specific beer </Link>
      </li>
    </ul>
  );
}

export default HomePage;
