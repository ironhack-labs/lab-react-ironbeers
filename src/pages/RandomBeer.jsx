import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";


const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <h1>{randomBeer.name}</h1>
        <h2>{randomBeer.tagline}</h2>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
};

export default RandomBeer;

