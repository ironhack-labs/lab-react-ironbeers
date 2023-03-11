import React from 'react'
import axios from 'axios'
import Navigation from '../components/Navigation'
import { useState, useEffect } from 'react';  
import { Link } from 'react-router-dom'

function RandomBeer() {
 
    const [randomBeer, setRandomBeer] = useState()
    

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
            console.log(response.data)
            setRandomBeer(response.data)
        })
        .catch((error) => console.error(error));
    }, [])

  return (
    <div>
    <Navigation/>

    <h1>BeerDetails</h1>

    {!randomBeer && <h3>Beer is sold out!</h3>}

    {randomBeer && (
    <>
    <img src={randomBeer.image_url} alt='Beer' className='allbeersImg'/>
    <p>{randomBeer.name}</p>
    <p>{randomBeer.tagline}</p>
    <p>{randomBeer.first_brewed}</p>
    <p>{randomBeer.attenuation_level}</p>
    <p>{randomBeer.description}</p>
    <p>{randomBeer.contributed_by}</p>

    <Link to="/beers">Back</Link> 
    </>
    )}
    </div>
  )
}

export default RandomBeer