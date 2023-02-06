import { useEffect, useState } from "react";
import { getRandomBeer } from "../api";
import NavBar from "../components/NavBar";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState();

  useEffect(() => {
    async function handleGetRandomBeer() {
      const response = await getRandomBeer();
      setRandomBeer(response.data);
    }
    handleGetRandomBeer();
  }, []);

  return randomBeer ? (
    <div>
      <NavBar />
      <>
        <img width="15%" src={randomBeer.image_url} alt={randomBeer.name} />
        <div>
          <h1>{randomBeer.name}</h1>
          <h3>{randomBeer.tagline}</h3>
        </div>
        <div>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.first_brewed}</p>
        </div>
        <div>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      </>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default RandomBeer;
