import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function Random() {

const [randomBeer, setRandomBeer] = useState(null)

useEffect(() => {
  axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
          console.log('response.data', response.data)
          setRandomBeer(response.data)
      })
      .catch((error) => console.log(error))
}, [])


  return (
    <>
    <header><a href="/">Home</a></header>
    <h1>Random</h1>
    <div>
        {randomBeer && (
            <div key={randomBeer._id}>
            <img src={randomBeer.image_url} alt="Bierflasche" />
            <h1>{randomBeer.name}</h1>
            <h2>{randomBeer.tagline}</h2>
            <h3>{randomBeer.first_brewed}</h3>
            <h3>{randomBeer.attenuation_level}</h3>
            <p>{randomBeer.description}</p>
            <h4>Created by: {randomBeer.contributed_by}</h4>
            </div>
        )}
    </div>
    </>
  )
}
