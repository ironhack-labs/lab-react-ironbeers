import React, { useEffect, useState } from "react";
import { randomBeer } from "../lib/beers.api";
import BeerInfo from "./beer-info";

const RandomBeer = () => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    randomBeer().then(beer => setBeer(beer));
  }, []);

  if (!beer) return <p>Loading...</p>;

  return <BeerInfo beer={beer}></BeerInfo>;
};

export default RandomBeer;
