import React from "react";

import AllBeers from "./allBeers";
import RandomBeer from "./randomBeer";
import NewBeer from "./newBeer";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Iron Beers</h1>
        <AllBeers />
        <RandomBeer />
        <NewBeer />
      </div>
    </div>
  )
}

export default Home;