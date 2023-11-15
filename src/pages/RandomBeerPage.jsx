import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong with the random beer :(");
        console.log(error);
      });
  }, []);
  return (
    <div>
      <img src={randomBeer.image_url} width="150px" height="auto"/>
      <h1>{randomBeer.name}</h1>
      <h2>{randomBeer.tagline}</h2>
      <h2>{randomBeer.first_brewed}</h2>
      <h2>{randomBeer.attenuation_level}</h2>
      <p>{randomBeer.description}</p>
      <h4>{randomBeer.contributed_by}</h4>
    </div>
  );
}

export default RandomBeerPage;
