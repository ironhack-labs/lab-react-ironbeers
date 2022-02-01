import React from 'react';

export const BeerCard = ({ image, name, tagline, creator}) => {
  return (<div className="beer-card">
      <img src={image} alt={name}/>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <p>Created By: {creator}</p>
      </div>
  )
};
