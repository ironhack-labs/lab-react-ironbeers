import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RandomBeerPage.css';  // Assuming you'll style with a CSS file

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    // Fetch a random beer from the API
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        console.log(response.data);  // Log the response data to inspect the structure
        setBeer(response.data);
      })
      .catch(error => {
        console.error('Error fetching the random beer:', error);
      });
  }, []);

  if (!beer) {
    return <div>Loading...</div>;  // Show a loading message while the data is being fetched
  }

  return (
    <div className="random-beer-page">
      <img src={beer.image_url} alt={beer.name} className="beer-image" />
      <h1>{beer.name}</h1>
      <p className="tagline">{beer.tagline}</p>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p className="description">{beer.description}</p>
      <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
