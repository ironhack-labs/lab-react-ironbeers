import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header'
export default function BeerElement({
  image_url,
  name,
  tagline,
  contributed_by,
  _id,
}) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Link to={`/${_id}`}>
        <div>
          <img src={image_url} width="100px" alt={name}></img>
          <h3>{name}</h3>
          <h4>{tagline}</h4>
          <p>{contributed_by}</p>
        </div>
      </Link>
    </div>
  );
}
