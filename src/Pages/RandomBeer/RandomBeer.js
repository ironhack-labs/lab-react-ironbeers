import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
import './RandomBeer.css'

const RandomBeer = () => {

  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(response => {
        console.log(response);
        setRandomBeer(response.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
    
      <div className='BeerContainer'>
        <div>
          <img className="BeerImg" src={randomBeer.image_url} alt="beer-img" />
        </div>
        <div >
          <h2> {randomBeer.name} </h2>
          <h3> {randomBeer.tagline} </h3>
          <p> {randomBeer.first_brewed} </p>
          <p> {randomBeer.attenuation_level} </p>
          <p> {randomBeer.description} </p>
          <h5> {randomBeer.contributed_by} </h5>
        </div>
      </div>
    </div>

  )
}

export default RandomBeer