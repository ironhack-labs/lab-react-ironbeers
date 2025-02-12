import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomBeerPage = () => {
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log(response.data);  // Log the entire response to the console
        // Handle the response as an object, not an array
        if (response.data) {
          setBeer(response.data);
        } else {
          setError('No beer found');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);  // Log any error that occurs during the request
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="beer-details">
      <img src={beer.image_url} alt={beer.name} style={{ width: '200px' }} />
      <h1>{beer.name}</h1>
      <h3>{beer.tagline}</h3>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed By:</strong> {beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeerPage;

