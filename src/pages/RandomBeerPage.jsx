import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import BeerDetailCard from "../components/BeerDetailCard";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeerPage() {

  const [ randomBeer, setRandomBeer ] = useState([])

  const getRandomBeer = () => {

  axios
    .get(API_URL)
    .then((response) => {
      const responseArray = response.data;
      setRandomBeer(responseArray);
    })
    .catch((error) => console.log(error));
  };

  useEffect(()=> {
    getRandomBeer();
  }, [] );

  return (
    <>
      <Header />
      <BeerDetailCard {...randomBeer} /> 
    </>
  )
}

export default RandomBeerPage;