import React from 'react';
import './Beers.css';

import { Link } from 'react-router-dom';

const BeerCard = ({ _id, image_url, name, tagline, contributed_by }) => {
  return (
    <Link to={`/beers/${_id}`}>
      <div className="listedBeer">
        <img src={image_url} alt={name}></img>
        <div>
          <h1>{name}</h1>
          <h2>'{tagline}'</h2>
          <h3>Created by: {contributed_by}</h3>
        </div>
      </div>
      <hr></hr>
    </Link>
  );
};

export default BeerCard;
