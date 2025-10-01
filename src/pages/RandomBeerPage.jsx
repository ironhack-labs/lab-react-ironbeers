import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get(
          "https://beers-api.edu.ironhack.com/beers/random"
        );
        setRandomBeer(response.data);
      } catch (error) {
        console.error("Error fetching random beer:", error);
      }
    };

    fetchRandomBeer();
  }, []);

  if (!randomBeer) return <p>Loading random beer...</p>;

  return (
    <div className="container p-4">
      <img
        src={randomBeer.image_url}
        alt={randomBeer.name}
        style={{ height: "12rem" }}
      />
      <h1>{randomBeer.name}</h1>
      <h4>{randomBeer.tagline}</h4>
      <p>{randomBeer.description}</p>
      <p>
        <strong>First Brewed:</strong> {randomBeer.first_brewed}
      </p>
      <p>
        <strong>Attenuation Level:</strong> {randomBeer.attenuation_level}%
      </p>
      <p>
        <strong>Contributed by:</strong> {randomBeer.contributed_by}
      </p>
    </div>
  );
}

export default RandomBeerPage;
