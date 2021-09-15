import React from 'react';
import './SingleBeer.css';

export default function SingleBeer({
  image_url,
  name,
  tagline,
  first_brewed,
  attenuation_level,
  description,
  contributed_by,
}) {
  return (
    <div className="SingleBeer">
      <img src={image_url} className="SingleBeer__image" alt={name} />
      <div className="SingleBeer__data">
        <div className="SingleBeer__data__title">
          <h5>{name}</h5>
          <h3 className="text-muted">{attenuation_level}</h3>
        </div>
        <div className="SingleBeer__data__subtitle">
          <h5 className="text-muted">{tagline}</h5>
          <p>{first_brewed}</p>
        </div>
        <div className="SingleBeer__data__description">
          <p>{description}</p>
        </div>
        <div className="SingleBeer__data__contributed">
          <p className="text-muted">{contributed_by}</p>
        </div>
      </div>
    </div>
  );
}
