import React, { useState, useEffect } from "react";
import axios from "axios";

const RANDOM_BEER_API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios.get(RANDOM_BEER_API_URL)
      .then((response) => {
        console.log(response.data); // This is to help visualize the data structure.
        setRandomBeer(response.data);
      })
      .catch((error) => console.log(error));
  }, []); // Empty dependency array means this effect runs once after the initial render.

  if (!randomBeer) return <p>Loading...</p>; // Handling the loading state.

  return (
    <div>
      <img src={randomBeer.image_url} alt={randomBeer.name} style={{ height: '200px' }} />
      <h1>{randomBeer.name}</h1>
      <h2>{randomBeer.tagline}</h2>
      <p><strong>First Brewed:</strong> {randomBeer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {randomBeer.attenuation_level}</p>
      <p><strong>Description:</strong> {randomBeer.description}</p>
      <p><strong>Contributed by:</strong> {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;
