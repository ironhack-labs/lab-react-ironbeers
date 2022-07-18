import React from "react";
import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

const HomePage = () => {
  return (
    <div className="container">
      <Link to={`/Beers`}>
        {" "}
        <img src={beersImg} alt="beer" />
        <h2>All beer</h2>
      </Link>
      <Link to={`/RandomBeer`}>
        <img src={newBeerImg} alt="beer" />
        <h2>Random</h2>
      </Link>
      <Link to={`/NewBeer`}>
        <img src={randomBeerImg} alt="beer" />
        <h2>Add Beer</h2>
      </Link>
    </div>
  );
};

export default HomePage;