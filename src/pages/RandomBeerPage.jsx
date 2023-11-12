import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        setRandomBeer(response.data);
      })
      .catch(error => {
        console.error('Error fetching random beer details:', error);
      });
  }, []);

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{randomBeer.name}</h1>
      <img src={randomBeer.image_url} alt={randomBeer.name} style={{ width: '150px', height: '300px' }} />
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
};

export default RandomBeerPage;
