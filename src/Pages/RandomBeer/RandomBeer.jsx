import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeer() {
  const [randomBeers, setRandomBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setRandomBeers(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  return (
    <div className="container">
       <div className="box">
          <img className="beer-img" src={randomBeers.image_url} alt={randomBeers.name} />
          <h2>{randomBeers.name}</h2>
          <h3>{randomBeers.tagline}</h3>
          <p><span>First Brewed: </span>{randomBeers.first_brewed}</p>
          <p><span>Attenutation Level: </span>{randomBeers.attenuation_level}</p>
          <p>{randomBeers.description}</p>
          <p><span>Created By: </span>{randomBeers.contributed_by}</p>          
      </div>
    </div>
  )
}

export default RandomBeer