import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function BeerDetails() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => response.json())
      .then(data => setBeer(data));
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="beer-details">
        <img src={beer.image_url} alt={beer.name} />
        <div>
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetails;
