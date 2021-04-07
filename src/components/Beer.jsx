import React from 'react';
import { Link } from 'react-router-dom';

export default function Beer({
  image_url,
  name,
  tagline,
  description,
  attenuation_level,
  first_brewed,
  contributed_by,
  _id,
}) {
  console.log(_id);
  return (
    <Link to={`/beer/${_id}`}>
      <div className="__card-R __m-2">
        <img src={image_url} alt="beer" className='__h-5' />
        <div>
          <h1>{name}</h1>
          <h4>{tagline}</h4>
          <p>{contributed_by}</p>
        </div>
      </div>
    </Link>
  );
}
