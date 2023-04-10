import axios from "axios";
import { useState, useEffect } from "react";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/random}`)
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((e) => {
        console.log("Error loading a random beer from the list of beers", e);
      });
  }, []);

  const renderBeer = () => {
    return (
      <>
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <h2>{randomBeer.name}</h2>
        <p>{randomBeer.tagline}</p>
        <h3>{randomBeer.attenuation_level}</h3>
        <p>{randomBeer.first_brewed}</p>
        <h4>{randomBeer.description}</h4>
        <p>{randomBeer.contributed_by}</p>
      </>
    );
  };

  return <>{randomBeer ? renderBeer() : <div>Loading...</div>}</>;
};

export default RandomBeer;
