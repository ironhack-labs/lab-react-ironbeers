import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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
        <>
          <img src={randomBeer.image_url} alt="Beer" height="300" />
          <h1>{randomBeer.name}</h1>
          <span>{randomBeer.attenuation_level}</span>
          <h2>{randomBeer.tagline}</h2>
          <span>{randomBeer.first_brewed}</span>
          <p>{randomBeer.description}</p>
          <h6>{randomBeer.contributed_by}</h6>
        </>
      )}
    </div>
  );
}

export default RandomBeer