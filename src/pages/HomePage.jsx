import React from "react";
import { Link } from "react-router-dom";
import AllBeers from "./AllBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import AllBeersImg from "../assets/beers.png";
import RandomBeerImg from "../assets/random-beer.png";
import NewBeerImg from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <Link to="/beers" element={<AllBeers />}>
        <img src={AllBeersImg} alt="AllBeers" />
        <h1> All Beers</h1>
      </Link>

      <Link to="/random-beer" element={<RandomBeer />}>
        <img src={RandomBeerImg} alt="Randombeer" />
        <h1> Random Beers</h1>
      </Link>
      <Link to="/new-beer" element={<NewBeer />}>
        <img src={NewBeerImg} alt="NewBeer" />
        <h1> New Beer</h1>
      </Link>
    </div>
  );
}

export default HomePage;
