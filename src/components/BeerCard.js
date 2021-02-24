import React from 'react';

function BeerCard({ name, image_url, tagline, description }) {
  return (
    <div>
      <h2>Beer info</h2>
      <h4>{name}</h4>
      <img src={image_url} alt="Random beer pic" width="auto" height="150" />
      <h5>{tagline}</h5>
      <p>{description}</p>
    </div>
  )
}

export default BeerCard;
