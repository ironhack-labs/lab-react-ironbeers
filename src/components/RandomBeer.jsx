import React from 'react'
import SingleBeer from './SingleBeer'
import axios from "axios";
import { useState, useEffect } from "react";

const RandomBeer = () => {
  const [randBeer, setRandBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log('response.data', response.data);
        setRandBeer(response.data)
      });

  }, [] );
  randBeer && console.log(randBeer)

  return (
    <SingleBeer randBeer={randBeer}/>
  )
}

export default RandomBeer
