import React from 'react';
import Header from './Header';

export default function BeerDetails(props) {
  return (
    <>
      <Header />
      <div className="beer-info">
        <div>
          <img
            style={{ maxWidth: '2rem', height: 'auto' }}
            src={props.image_url}
          />
        </div>
        <div>
          <h2>{props.name}</h2>
        </div>
        <div>
          <h5>{props.tagline}</h5>
        </div>
        <div>
          <h5>{props.first_brewed}</h5>
        </div>
        <div>
          <h5>{props.attenuation_level}</h5>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
        <div>
          <h5>{props.contributed_by}</h5>
        </div>
      </div>
    </>
  );
}
