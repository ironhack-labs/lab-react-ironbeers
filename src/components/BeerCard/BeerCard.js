import React from 'react';


function BeerCard({ beer }) {
  return (
    <div>
      <div>
        <img alt={beer.name} src={beer.image_url} />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <h1>{beer.name}</h1>
        <p>{beer.attenuation_level}</p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <h2>{beer.tagline}</h2>
        <p>{beer.first_brewed}</p>
      </div>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default BeerCard;