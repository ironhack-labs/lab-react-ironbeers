import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BeerDetailsPage.css';

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        console.log(response.data);
        setBeer(response.data);
      })
      .catch(error => {
        console.error('Error fetching beer details:', error);
      });
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="beer-details">
      <img src={beer.image_url} alt={beer.name} className="beer-image" />
      <div className="beer-info">
        <div className="header">
          <h2>{beer.name}</h2>
          <span className="attenuation-level">{beer.attenuation_level}</span>
        </div>
        <div className="tagline-first-brewed">
          <p className="tagline">{beer.tagline}</p>
          <span className="first-brewed">{beer.first_brewed}</span>
        </div>
        <p className="description">{beer.description}</p>
        <p className="contributed"><strong>Contributed by:</strong> {beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
