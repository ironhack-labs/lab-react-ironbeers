import React from "react";

import AllBeers from "./allBeers";
import RandomBeer from "./randomBeer";
import NewBeer from "./newBeer";
import BeerDetails from "./beerDetails";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Iron Beers</h1>
        <AllBeers />
        <RandomBeer />
        <NewBeer />
        <BeerDetails />
      </div>
    </div>
  )
}

export default Home;