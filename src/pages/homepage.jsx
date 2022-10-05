import React from "react";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/beers"} style={{ textDecoration: "none" }}>
        <div>
          <img src={beers} alt="beers"></img>
          <h1>All Beers</h1>
          <p>Description</p>
        </div>
      </Link>
      <div>
        <Link to={"/random-beer"} style={{ textDecoration: "none" }}>
          <img src={randomBeer} alt="random-beer"></img>
          <h1>Random beer</h1>
          <p>Description</p>
        </Link>
      </div>
      <div>
        <Link to={"/new-beer"} style={{ textDecoration: "none" }}>
          <img src={NewBeer} alt="new-beer"></img>
          <h1>New beer</h1>
          <p>Description</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
