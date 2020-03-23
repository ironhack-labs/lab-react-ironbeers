import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { randomBeer } from "../api/BeersApi";
import BeerCard from "./BeerCard";

const RandomBeer = () => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    randomBeer().then(beer => setBeer(beer));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <BeerCard beer={beer}></BeerCard>;
    </>
  );
};

export default RandomBeer;
