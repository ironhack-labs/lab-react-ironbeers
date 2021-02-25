import React from 'react';
import { Link } from 'react-router-dom'

function BeerCard({image_url, name, tagline, contributed_by, _id}) {
  return (
    <>
      <div>
            <img src={image_url} alt={name}></img>
            <h3>{name}</h3>
            <h4>{tagline}</h4>
            <p>Created by: {contributed_by}</p>
            <Link to = {`/beers/${_id}`}>See details</Link>

        </div>
    </>
  );
}

export default BeerCard;