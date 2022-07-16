import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([])

  useEffect(() => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
          console.log(response.data)

          setRandomBeer(response.data)        
      })
      .catch(err => console.log(err))
  },[])

  return (
    <div>
      <img src={randomBeer.image_url} height='120' alt='beerPic' />
      <h1>{randomBeer.name}</h1>
      <h2>{randomBeer.tagline}</h2>
      <h3>First Brewed: {randomBeer.first_brewed}</h3>
      <h4>Attenuation Level: {randomBeer.attenuation_level}</h4>
      <p>{randomBeer.description}</p>
      <h5>{randomBeer.contributed_by}</h5>
   </div>
  )
}
