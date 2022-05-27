import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

function RandomBeers() {
  const [randomBeer, setRandomBeer] = useState(null);

  const getRandomBeer = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <div>
      <Header />
      <h1>Random Beers</h1>
      {randomBeer && (
        <div>
          <img src={randomBeer.image_url} alt="beersImg" />
          <h2>{randomBeer.name}</h2>
          <h4>{randomBeer.tagline}</h4>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeers;
