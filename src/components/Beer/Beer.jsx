import React from 'react';

import './Beer.css';

export default function Beer({ image_url, name, tagline, contributed_by }) {
  return (
    <div className="Beer">
      <img src={image_url} className="Beer__image" alt={name} />
      <div className="Beer__data">
        <h5>{name}</h5>
        <p className=" text-muted">{tagline}</p>
        <p>
          <small>
            <b>Created by: </b>
            <span className="text-muted">{contributed_by}</span>
          </small>
        </p>
      </div>
    </div>
  );
}
