import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        setRandomBeer(response.data);
      } catch (error) {
        console.error("Error fetching random beer:", error);
      }
    };

    fetchRandomBeer();
  }, []); 

  return (
    <div>
      <h1>Random Beer</h1>
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.description}</p>
    </div>
  );
}

export default RandomBeerPage;
