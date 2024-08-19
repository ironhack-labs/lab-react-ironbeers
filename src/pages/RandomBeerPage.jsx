import React, { useEffect, useState } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

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

  if (!randomBeer) return <div>Loading...</div>;

  return (
    <div>
      <img
        src={randomBeer.image_url}
        alt={randomBeer.name}
        style={{ width: "200px" }}
      />
      <h1>{randomBeer.name}</h1>
      <h2>{randomBeer.tagline}</h2>
      <p>{randomBeer.description}</p>
      <p>
        <strong>First Brewed:</strong> {randomBeer.first_brewed}
      </p>
      <p>
        <strong>Brewer's Tips:</strong> {randomBeer.brewers_tips}
      </p>
      <p>
        <strong>Attenuation Level:</strong> {randomBeer.attenuation_level}
      </p>
      <p>
        <strong>Contributed By:</strong> {randomBeer.contributed_by}
      </p>
    </div>
  );
}

export default RandomBeerPage;
