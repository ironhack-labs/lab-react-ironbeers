import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        console.log(response.data);
        setRandomBeer(response.data);
      } catch (error) {
        console.error('Error fetching random beer:', error);
      }
    };

    fetchRandomBeer();
  }, []);

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src={randomBeer.image_url}
        alt={randomBeer.name}
        style={{ height: '200px' }}
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/200'; }} // Fallback image
      />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p><strong>First brewed:</strong> {randomBeer.first_brewed}</p>
      <p><strong>Attenuation level:</strong> {randomBeer.attenuation_level}</p>
      <p><strong>Description:</strong> {randomBeer.description}</p>
    </div>
  );
};

export default RandomBeerPage;
