import { useEffect, useState } from "react";
import { getRandomBeer } from "../services/servise";

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState(null);
  useEffect(() => {
    getRandomBeer()
      .then((randomBeerApi) => {
        setRandomBeer(randomBeerApi);
      })
      .catch((err) => console.error(err));
  }, []);
  if (!randomBeer) return "Loading...";
  return (
    <div>
      <img src={randomBeer.image_url} />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.firs_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
};

export default RandomBeerPage;
