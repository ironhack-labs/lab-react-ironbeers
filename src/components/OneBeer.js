import React from 'react';
import {Link} from 'react-router-dom';

function OneBeer({ image_url, name, tagline, contributed_by, _id }) {
  return (
    <div>
      <img src={image_url} alt="image" />
      <p>Name: {name}</p>
      <p>{tagline}</p>
      <p>{contributed_by}</p>
      <Link to={`/beers/${_id}`}>See details</Link>
    </div>
  );
}
export default OneBeer;
