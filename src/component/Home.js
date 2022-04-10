import React from "react";
import { Link } from "react-router-dom";
import Beers from "../assets/beers.png";
import NewBeer from "../assets/new-beer.png";
import RandomBeer from "../assets/random-beer.png";

const Home = () => {
  return (
    <div>
      <Link to="/beers">All beers</Link>
      <img src={Beers} alt="beers" />
      <p></p>
      <Link to="/random-beer">Random beer</Link>
      <img src={NewBeer} alt="random-beers" />
      <a href="/new-beer">New beer</a>
      <img src={RandomBeer} alt="new-beer" />
    </div>
  );
};

export default Home;
