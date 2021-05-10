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
      <Link to={`/${beer._id}`}>
        <div>
          <img src={beer.image_url}></img>
          <h3>{beer.name}</h3>
          <h4>{beer.tagline}</h4>
          <p>{beer.contributed_by}</p>
        </div>
      </Link>
    </div>
  );
}
