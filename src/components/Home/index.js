import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import beer from "../../assets/beers.png";
import random from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";

export default function Home() {
  return (
    <div className="home">
      <Link to="/beers">
        <div className="beers">
          <img src={beer} alt="beers" />
          <h1>All Beers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div className="beers">
          <img src={random} alt="randombeer" />
          <h1>Random Beer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div className="beers">
          <img src={newBeer} alt="newbeer" />
          <h1>New Beer</h1>
          <p>
            It is a long established fact that a reader will be distracted by.
          </p>
        </div>
      </Link>
    </div>
  );
}
