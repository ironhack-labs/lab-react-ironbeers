import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import './App.css';


const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({})

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(beerRandom => setRandomBeer(beerRandom.data))
    .catch(error => console.log(`${error}`))
  }, [])

  return (
    <div>
      <Header /> 
      <div>
        <figure >
          <img src={randomBeer.image_url} alt={randomBeer.name} />
        </figure>
        <div>
          <h2>{randomBeer.name}</h2>
          <p><i>{randomBeer.tagline}</i> {randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.first_brewed}</p>
        </div>
      </div>
    </div>
  )
};

export default RandomBeer;