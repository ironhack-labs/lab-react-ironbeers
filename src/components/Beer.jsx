import React from 'react';
import './../styles/Beer.css';

const Beer = ({ beer }) => {
  return (
    <div className="Beer">
      <img src={beer.image_url} alt={beer.name} />
      <div className="info">
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>
          <span>Created by:</span> {beer.contributed_by}
        </p>
      </div>
    </div>
  );
};

export default Beer;
