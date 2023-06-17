import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [oneRandomBeer, setRandomBeer] = useState(null);
  useEffect(() => {
    const getOneRandomBeer = async () => {
      const { data } = await axios(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(data);
    };
    getOneRandomBeer();
  }, []);
  if (oneRandomBeer == null) {
    return <p>loading....it can take a few seconds </p>;
  }
  return (
    <div>
      <div>
        <img src={oneRandomBeer.image_url} alt="beer" />
      </div>
      <div>
        <h2>{oneRandomBeer.name}</h2>
        <p>{oneRandomBeer.attenuation_level}</p>

        <h3>{oneRandomBeer.tagline}</h3>
        <p>{oneRandomBeer.first_brewed}</p>

        <p>{oneRandomBeer.description}</p>
        <p>{oneRandomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeer;
