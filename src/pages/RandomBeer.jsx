import { useState, useEffect } from "react";
import Header from "../components/Header";

import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div class="single-beer-container">
        <img
          class="beer-img"
          src={randomBeer.image_url}
          alt={randomBeer.name}
          width={"250px"}
        />
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.tagLine}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p class="description">{randomBeer.description}</p>
        <p class="tagline">{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeer;
