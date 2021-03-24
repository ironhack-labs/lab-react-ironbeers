import React from 'react';

const SingleBeer = ({ beer }) => {
  console.log(`beer`, beer);
  return (
    <div className="Detail">
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <p className="specs">
        {beer.first_brewed} - {beer.attenuation_level}
      </p>
      <p>{beer.description}</p>
      <p className="creator">
        <b>Created by:</b> {beer.contributed_by}
      </p>
    </div>
  );
};

export default SingleBeer;
