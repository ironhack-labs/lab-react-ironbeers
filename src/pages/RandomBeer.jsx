import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState([]);

    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers/random")
          .then((response) => {
              setRandomBeer(response.data);
              console.log(response.data)
          })
          .catch((err) => console.log(err));
      },[] );


  return (
    <div>
        <Header/>
        <img src={randomBeer.image_url} alt="beer" />
        <h3>{randomBeer.tagline} </h3>
        <h3>{randomBeer.first_brewed}</h3>
        <h3>{randomBeer.attenuation_level}</h3>
        <h3>{randomBeer.description}</h3>
        <h3>{randomBeer.contributed_by}</h3>
    </div>
  )
}

export default RandomBeer