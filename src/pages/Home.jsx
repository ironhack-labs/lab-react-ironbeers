import React from "react";
import { Link } from "react-router-dom";

import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

const Home = () => {
  return (
    <>
      <div>
        <Link to="/beers">
          <img src={beersImg} alt="beers" />
          <h2>All Beers</h2>
        </Link>
        <Link to="/beers/random-beer">
          <img src={randomBeerImg} alt="random-beer" />
          <h2>Random Beer</h2>
        </Link>
        <Link to="/beers/new-beer">
          {" "}
          <img src={newBeerImg} alt="new-beer" />
          <h2>New Beer</h2>
        </Link>
      </div>
    </>
  );
};

export default Home;
