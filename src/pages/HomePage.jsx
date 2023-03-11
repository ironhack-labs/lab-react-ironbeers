import React from "react";
import RandomBeer from "./RandomBeer";
import AllBeers from "./AllBeers";
import NewBeer from "./NewBeer";
// import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <AllBeers></AllBeers>
      <RandomBeer></RandomBeer>
      <NewBeer></NewBeer>
    </div>
  );
}

export default HomePage;
