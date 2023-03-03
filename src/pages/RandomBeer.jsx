import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);

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
      <Navbar />
      <div>
        <div>
          <img src={randomBeer.image_url} alt={randomBeer.name} />
        </div>
        <div>
          <h2>{randomBeer.name}</h2>
          <h2>{randomBeer.attenuation_level}</h2>
        </div>
        <div>
          <h4>{randomBeer.tagline}</h4>
          <h4>{randomBeer.first_brewed}</h4>
        </div>
        <div>
          <p>{randomBeer.description}</p>
        </div>
        <div>{randomBeer.contributed_by}</div>
      </div>
    </div>
  );
}

export default RandomBeer;
