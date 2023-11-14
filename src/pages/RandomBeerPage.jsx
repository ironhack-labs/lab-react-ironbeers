import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    getRandomBeer();
  }, []);

  const getRandomBeer = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.log("Error getting random beer from the API...");
        console.error(error);
      });
  };

  return (
    <div className="BeerDetail">
      <div className="BeerCard">
        <img
          className="beerImg"
          alt={randomBeer.name}
          src={randomBeer.image_url}
        />
        <div className="beerDetails">
          <h1>{randomBeer.name}</h1>
          <p>{randomBeer.tagline}</p>
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Contributed By: {randomBeer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeerPage;
