import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import BeerDetail from "../components/BeerDetail";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  

  const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      console.log(response.data);
      setRandomBeer(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <div>
      {randomBeer && (
      <BeerDetail beer={randomBeer}/>
      )}
    </div>
  );
}

export default RandomBeer