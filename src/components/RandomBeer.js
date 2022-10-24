import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((err) => console.log("error getting random beer from API", err));
  }, []);

  return (
    <div>
      <Header />
      <img src={randomBeer?.image_url} alt={randomBeer.name} />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;