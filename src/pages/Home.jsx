import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <div>
      <img src={beers} alt="Beers" className="AllBeers" />
      <Link to="/beers">
        <button>All Beers</button>
      </Link>
      <img src={newBeer} alt="Beers" className="RandomBeers" />
      <Link to="/random-beer">
        <button>Random Beer</button>
      </Link>
      <img src={randomBeer} alt="Beers" className="RandomBeers" />
      <Link to="/new-beer">
        <button>New Beer</button>
      </Link>
    </div>
  );
}

export default Home;
