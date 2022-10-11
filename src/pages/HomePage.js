import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";


const HomePage = () => {
  return (
    <div>
      <div>
        <Link to="/beers" style={{ textDecoration: "none", color: "#1C8ADB" }}>
          <img src={beers} alt="" />
          <h2>AllBeers</h2>
          <p>Find all beers</p>
        </Link>
      </div>
      <div>
        <Link
          to="/random-beer"
          style={{ textDecoration: "none", color: "#1C8ADB" }}
        >
          <img src={newBeer} alt="" />
          <h2>Random Beer</h2>
          <p>Find a random beer</p>
        </Link>
      </div>
      <div>
        <Link
          to="new-beer"
          style={{ textDecoration: "none", color: "#1C8ADB" }}
        >
          <img src={randomBeer} alt="" />
          <h2>New Beer</h2>
          <p>Create a new beer</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
