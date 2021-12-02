import React from 'react';
import './BeersList.css';
import { Link } from 'react-router-dom';

const BeersList = (props) => {
  return (
    <div>
      <h1>All Beers</h1>
      {props.beers.map((elm) => {
        return (
          <div>
            <img src={elm.image_url} alt={elm.name} />
            <h2>{elm.name}</h2>
            <h3>{elm.tagline}</h3>
            <p>{elm.contributed_by}</p>
            <Link to={`/beers/${elm._id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default BeersList;
