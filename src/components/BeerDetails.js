import React from 'react';
import { Link } from 'react-router-dom';

const BeerDetails = ({ image_url, name, tagline, contributed_by, _id }) => {
  return (
    <>
      <article className="beer-card">
        <img className="imageCardBeer" src={image_url} alt="beer img"></img>
        <div className="card-description">
          <Link to={'/singleBeer/' + _id}>
            <h3>{name}</h3>
          </Link>
          <p className="tagline">{tagline}</p>
          <p className="subtext">
            <strong>Created by:</strong> {contributed_by}
          </p>
        </div>
      </article>
    </>
  );
};

export default BeerDetails;
