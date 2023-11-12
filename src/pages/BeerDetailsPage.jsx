import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BeerDetailsPage = () => {
  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        setBeerDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching beer details:', error);
      });
  }, [beerId]);

  if (!beerDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{beerDetails.name}</h1>
      <img src={beerDetails.image_url} alt={beerDetails.name} style={{ width: '150px', height: '300px' }} />
      <p>{beerDetails.tagline}</p>
      <p>First Brewed: {beerDetails.first_brewed}</p>
      <p>Attenuation Level: {beerDetails.attenuation_level}</p>
      <p>Description: {beerDetails.description}</p>
      <p>Contributed by: {beerDetails.contributed_by}</p>
    </div>
  );
};

export default BeerDetailsPage;
