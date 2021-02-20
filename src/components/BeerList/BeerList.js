import React from 'react';
import './BeerList.css';

const BeerList = ({ beer }) => {
  return (
    <div className="beer-card">
      <div className="">
        <img src={beer.image_url} alt="" />
      </div>
      <div className="">
        <h3>{beer.name}</h3>
        <h5>{beer.tagline}</h5>
        <p>
          <span>Created by: </span>
          {beer.contributed_by}
        </p>
      </div>
    </div>
  );
};

export default BeerList;
