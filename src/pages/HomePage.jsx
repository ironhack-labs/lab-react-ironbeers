import React from "react";
import AllBeer from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <img src={AllBeer} alt="All Beers" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
      </Link>
      <Link to="/random-beer">
        <img src={RandomBeer} alt="randomBeer" />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
      </Link>
      <Link to="/new-beer">
        <img src={NewBeer} alt="New beer" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
