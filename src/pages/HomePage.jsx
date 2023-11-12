import React from "react";
import { Link } from "react-router-dom";
import Beers from "../assets/beers.png"
import RandomBeer from "../assets/random-beer.png"
import NewBeer from "../assets/new-beer.png"
import "../App.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h2>Welcome to IronBeers</h2>
      </div>
      <div className="home-links">
        <Link to="/beers" className="home-link">
          <img src={Beers} alt="All Beers" />
          <span>All Beers</span>
        </Link>
        <Link to="/random-beer" className="home-link">
          <img src={RandomBeer} alt="Random Beer" />
          <span>Random Beer</span>
        </Link>
        <Link to="/new-beer" className="home-link">
          <img src={NewBeer} alt="New Beer" />
          <span>New Beer</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
