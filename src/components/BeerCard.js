import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = ({ id, image, name, tagline, contributor }) => {
  return (
    <Link to={'/beers/' + id} title={name}>
      <div className="beer-card">
        <div className="beer-col">
          <div className="beer-image">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="beer-col">
          <h2>{name}</h2>
          <p className="beer-tagline">{tagline}</p>
          <p className="beer-contributor">
            <b>Created by:</b> {contributor}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BeerCard;
