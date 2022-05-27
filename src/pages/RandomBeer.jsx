import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  const getRandomBeer = async () => {
    try {
      const result = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setRandomBeer(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <div>
      {randomBeer && (
        <div>
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <h2>{randomBeer.name}</h2>
          <h4>{randomBeer.tagline}</h4>
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Created be: {randomBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;
