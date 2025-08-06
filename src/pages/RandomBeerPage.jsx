import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching random beer:", error);
      });
  }, []);

  if (!randomBeer) return <p>Loading random beer...</p>;

  return (
    <div className="container text-center mt-5">
      <img src={randomBeer.image_url} alt={randomBeer.name} style={{ height: "200px" }} />
      <h2>{randomBeer.name}</h2>
      <h4 className="text-muted">{randomBeer.tagline}</h4>
      <p><strong>First Brewed:</strong> {randomBeer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {randomBeer.attenuation_level}</p>
      <p><strong>Description:</strong> {randomBeer.description}</p>
      <p><strong>Contributed by:</strong> {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
