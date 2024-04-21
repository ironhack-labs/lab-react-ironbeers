import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {

  const [randomBeer, setRandomBeer] = useState(0);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setRandomBeer(response.data)
      })
      .catch(() => console.log('error'))
  }, [])  

  return (
    <div>
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <p>Name: {randomBeer.name}</p>
      <p>Tagline: {randomBeer.tagline}</p>
      <p>First brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomBeersPage;
