import React from "react";
import { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard";

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((res) => setBeer(res))
      .catch((error) => console.log(error));
  }, []);
  console.log(beer);
  if (!beer) {
    return <div className="Loading">Loading!</div>;
  }
  return <BeerCard beer={beer} />;
};

export default RandomBeer;
