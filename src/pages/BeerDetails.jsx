import React from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';  
import Navigation from '../components/Navigation';

function BeerDetails() {

    const [beer, setBeer] = useState({})
    
    const { beerId } = useParams()
    console.log('beerId', beerId)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => {
            console.log(response.data)
            setBeer(response.data)
        })
        .catch((error) => console.error(error));
    }, [beerId])

  return (
    <div>
    <Navigation/>

    <h1>BeerDetails</h1>

    {!beer && <h3>Beer is sold out!</h3>}

    {beer && (
    <>
    <img src={beer.image_url} alt='Beer' className='allbeersImg'/>
    <p>{beer.name}</p>
    <p>{beer.tagline}</p>
    <p>{beer.first_brewed}</p>
    <p>{beer.attenuation_level}</p>
    <p>{beer.description}</p>
    <p>{beer.contributed_by}</p>

    <Link to="/beers">Back</Link> 
    </>
    )}
    </div>
  )
}

export default BeerDetails