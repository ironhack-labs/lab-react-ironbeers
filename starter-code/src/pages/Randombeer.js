import React, { useEffect, useState } from "react";
import { randomBeer } from "../lib/beers.api";
import { Beerdet } from "../components/BeerDet";

export const Randombeer = props => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    randomBeer().then(beer => setBeer(beer));
  }, []);

  return <Beerdet beer={beer} />;
};
