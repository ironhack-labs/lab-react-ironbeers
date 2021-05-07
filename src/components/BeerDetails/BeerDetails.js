import React from 'react';
import "./BeerDetails.css";

export default function BeerDetails({
  image_url,
  name,
  tagline,
  first_brewed,
  attenuation_level,
  description,
  contributed_by,
}) {
  return (
    <section>
      <img src={image_url} alt=""></img>
      <div id="info-beer">
        <div id="title-label">
          <h1>{name}</h1>
          <p>{attenuation_level}</p>
        </div>
        <div id="description-label">
          <h2>{tagline}</h2>
          <p>{first_brewed}</p>
        </div>
        <p>{description}</p>
        <p id="contributed-label">{contributed_by}</p>
      </div>
    </section>
  );
}
