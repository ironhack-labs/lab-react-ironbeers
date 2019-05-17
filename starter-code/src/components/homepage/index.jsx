import React from "react";
import Beers from "./Beers";
import NewBeer from "./NewBeer";
import RandomBeer from "./RandomBeer";

const homeStyles = {
  display: "flex",
  flexDirection: "column"
};

const Home = () => {
  return (
    <div style={homeStyles}>
      <Beers />
      <RandomBeer />
      <NewBeer />
    </div>
  );
};

export default Home;
