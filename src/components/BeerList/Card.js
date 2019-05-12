import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ _id: id, image_url, name, tagline, contributed_by }) => {
  const creator = contributed_by.split(' <')[0];

  return (
    <article className="box">
      <div className="columns is-mobile">
        <div className="column is-2">
          <img src={image_url} alt={name} />
        </div>
        <div className="column">
          <h2 className="title">
            <Link to={`/beers/${id}`}>{name}</Link>
          </h2>
          <p className="subtitle">{tagline}</p>
          <p>
            Created by: <strong>{creator}</strong>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
