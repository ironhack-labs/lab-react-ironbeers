

import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeerPage = () => {
  const [beer, setBeer] = useState(null); 

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setBeer(response.data);
        console.log(response.data); 
      } catch (error) {
        console.error('Error fetching the random beer:', error);
      }
    };

    fetchRandomBeer();
  }, []); 

  if (!beer) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} style={{ width: '100px' }} />
      <h1>{beer.name}</h1>
      <p><strong>Tagline:</strong> {beer.tagline}</p>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed By:</strong> {beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeerPage;