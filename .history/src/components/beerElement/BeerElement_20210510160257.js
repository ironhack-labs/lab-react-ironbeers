import React from 'react';
import { Link } from 'react-router-dom';

export default function BeerElement({
  image_url,
  name,
  tagline,
  contributed_by,
  _id,
}) {

  return (
    <div>
      <Link to={`/${_id}`}>
        <div>
          <img src={image_url}></img>
          <h3>{name}</h3>
          <h4>{tagline}</h4>
          <p>{contributed_by}</p>
        </div>
      </Link>
    </div>
  );
}
