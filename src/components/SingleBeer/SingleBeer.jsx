import React from 'react';

import Navbar from '../Navbar/Navbar';
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
    <div className="SingleBeer container">
      <Navbar />
      <div className="card" style={{ width: '18rem' }}>
        <img src={image_url} className="card-img-top" alt={name} />
        <div className="card-body SingleBeer__data">
          <h5>{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
