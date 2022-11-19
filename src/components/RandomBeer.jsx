import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


function RandomBeer() {

  const [randomBeer, setRandomBeer] = useState(null);

  const getRandomBeer = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
      const randomBeer = response.data;
      setRandomBeer(randomBeer);

    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    getRandomBeer();
  }, [])
  return (
    <div>
      {randomBeer && <div>
        <img className='randomBeerImg' src={randomBeer.image_url}></img>
        <h1>{randomBeer.name}</h1>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
        </div>
        }
    </div>
  )
}

export default RandomBeer