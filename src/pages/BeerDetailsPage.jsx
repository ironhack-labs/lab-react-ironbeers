import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BeerDetailsPage = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        setBeer(response.data);
      })
      .catch(error => {
        console.error('Error fetching beer details:', error);
      });
  }, [beerId]);

  if (!beer) return <div>Loading...</div>;

  return (
    <div>
      <h1>{beer.name}</h1>
      <p>{beer.description}</p>
      <img src={beer.image_url} alt={beer.name} />
    </div>
  );
};

export default BeerDetailsPage;

