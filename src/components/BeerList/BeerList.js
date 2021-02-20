import React from 'react';

const BeerList = ({ beer }) => {
  return (
    <div>
      <img src={beer.image_url} alt="" />
      <h3>{beer.name}</h3>
      <h5>{beer.tagline}</h5>
      <p>
        <span>Created by:</span>
        {beer.contributed_by}
      </p>
    </div>
  );
};

export default BeerList;
