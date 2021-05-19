import React from 'react';
import './Beer.css';

import HomeLink from '../HomeLink/HomeLink';

export default function BeerDetail(props) {
  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = props.beer;

  return (
    <div className="beer">
      <HomeLink />
      <img src={image_url} alt={name} />
      <h1>{name}</h1>
      <h2>{attenuation_level}</h2>
      <h3>{tagline}</h3>
      <h4>{first_brewed}</h4>
      <p>{description}</p>
      <p>{contributed_by}</p>
    </div>
  );
}
