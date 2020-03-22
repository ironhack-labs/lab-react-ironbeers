import React, { useState, useEffect } from "react";
import {randomBeer} from "../lib/BeersApi";
import BeerInfo from "./BeersInfo";

const RandomBeer = () => {
  const [beer,setBeer] = useState({});

  useEffect(()=> {
    randomBeer().then(beer => setBeer(beer));
  },[]);


  return (
    <>
  <BeerInfo beer={beer}></BeerInfo>;
  </>
  )
};

export default RandomBeer;