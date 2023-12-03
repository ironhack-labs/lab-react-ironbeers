import React, { useState, useEffect } from "react";

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await fetch(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        const data = await response.json();
        setRandomBeer(data);
        console.log(data); // Log the response to understand the structure
      } catch (error) {
        console.error("Error fetching random beer:", error);
      }
    };

    fetchRandomBeer();
  }, []);

  return (
    <div>
      <h2>Random Beer</h2>
      {Object.keys(randomBeer).length > 0 && (
        <div key={randomBeer._id}>
          <img src={randomBeer.image_url} alt={randomBeer.name + "img"} />
          <div>
            <h3>{randomBeer.name}</h3>
            <p>Tagline: {randomBeer.tagline}</p>
            <p>First Brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation Level: {randomBeer.attenuation_level}</p>
            <p>Description: {randomBeer.description}</p>
            <p>Contributed by: {randomBeer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomBeerPage;
