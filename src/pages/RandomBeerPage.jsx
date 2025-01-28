import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => setRandomBeer(response.data))
      .catch((error) => console.error("Error fetching random beer:", error));
  }, []);

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {randomBeer && (
        <>
          <img src={randomBeer.image_url} alt="beer" height="300px" width="auto" />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
        </>
      )}
    </div>
  );
}

export default RandomBeerPage;

