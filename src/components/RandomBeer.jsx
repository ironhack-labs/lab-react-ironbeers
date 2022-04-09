import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

function RandomBeer() {

  const [beer, setBeer] = useState([]);

  useEffect(()=> {

    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(response =>{
        setBeer(response.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
        <img className="imgTwo" src={beer.image_url} alt="beer"/>
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
    </>
  )
}

export default RandomBeer