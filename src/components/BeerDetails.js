import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

function BeerDetails() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => response.json())
      .then(data => setBeer(data));
  }, [beerId]);

  return (
    <div>
      <Header />
      {beer && (
        <>
          <img src={beer.image_url} alt={beer.name} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default BeerDetails;