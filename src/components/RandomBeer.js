import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        setBeer(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Random Beer</h1>
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p><strong>First brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation level:</strong> {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p><strong>Created by:</strong> {beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
