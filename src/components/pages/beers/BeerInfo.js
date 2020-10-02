import React from 'react';
import './Beers.css';
const BeerInfo = ({ image_url, name, description, contributed_by }) => {
  return (
    <>
      <div className="info">
        <img src={image_url} />
        <div class="text">
          <h2>{name}</h2>

          <p>{description}</p>
          <p>Created by:</p>
          <h4>{contributed_by}</h4>
        </div>
      </div>
    </>
  );
};

export default BeerInfo;
