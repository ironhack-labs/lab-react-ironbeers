// src/pages/RandomBeerPage.jsx
import React, { useState, useEffect } from "react";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    // Make a GET request to fetch a random beer from the API
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((data) => setRandomBeer(data));
  }, []);

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{randomBeer.name}</h1>
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
