import React from 'react';
import { Link } from 'react-router-dom';
import './BeerCard.css';

function BeerCard(props) {
  const detailsOfTheBeer = props.details;
  console.log(detailsOfTheBeer._id);
  return (
    <Link to={`/beers/${detailsOfTheBeer._id}`}>
      <img src={detailsOfTheBeer.image_url} />
      <h2>{detailsOfTheBeer.name}</h2>
      <p>
        <small> {detailsOfTheBeer.tagline}</small>
      </p>
      <p>
        <strong>{detailsOfTheBeer.contributed_by}</strong>
      </p>
      <p>{detailsOfTheBeer.description}</p>
    </Link>
  );
}

export default BeerCard;
