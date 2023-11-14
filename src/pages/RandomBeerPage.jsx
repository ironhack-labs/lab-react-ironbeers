import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!randomBeer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img
        src={randomBeer.image_url}
        alt={randomBeer.name}
        style={{ maxWidth: "100px", marginBottom: "10px" }}
      />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;
