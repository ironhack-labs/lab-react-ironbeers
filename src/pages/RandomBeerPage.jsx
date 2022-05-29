import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState([]);

  const getRandomBeer = async () => {
    let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
    setRandomBeer(response.data);
  };

  useEffect(() => {
    getRandomBeer();
  }, []);
  return (
    <div>
      <Header />
      <div className="beerCard">
              <div className="beerImg">
                <img src={randomBeer.image_url} alt={randomBeer.name} />
              </div>
              <div className="beerText">
                <h1>{randomBeer.name}</h1>
                <h2>{randomBeer.tagline}</h2>
                <p><b>Fisrt brewed:</b> {randomBeer.first_brewed}</p>
                <p><b>Attenuation level:</b> {randomBeer.attenuation_level}</p>
                <p><b>Brewer Tips:</b> {randomBeer.brewers_tips}</p>
                <p>{randomBeer.description}</p>
                <p><b>Contributed by:</b> {randomBeer.contributed_by}</p>
              </div>
            </div>
    </div>
  );
}

export default RandomBeerPage;
