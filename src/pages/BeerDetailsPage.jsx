import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BeerDetailsPage = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        console.log(response.data); // For debugging purposes
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching beer:', error);
      }
    };

    fetchBeer();
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src={beer.image_url}
        alt={beer.name}
        style={{ height: '200px' }}
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/200'; }} // Fallback image
      />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p><strong>First brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetailsPage;
