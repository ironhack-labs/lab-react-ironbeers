import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BeerDetailsPage.css';  // Assuming you'll style with a CSS file

function BeerDetailsPage() {
  const { beerId } = useParams();  // Access the beerId from the URL
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    // Fetch the beer details from the API using the beerId
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        console.log(response.data);  // Log the response data to inspect the structure
        setBeer(response.data);
      })
      .catch(error => {
        console.error('Error fetching the beer details:', error);
      });
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;  // Show a loading message while the data is being fetched
  }

  return (
    <div className="beer-details-page">
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

export default BeerDetailsPage;
