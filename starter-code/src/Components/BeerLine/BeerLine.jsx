import React from 'react';

import './BeerLine.css'

export default function BeerLine(props) {
  const { beer } = props;
  const { image_url, name, tagline, contributed_by } = beer;
  return (
    <div className="beer">
      <div className="image-container">
        <img src={image_url} alt="" />
      </div>
      <div className="beer-info">
        <h1>{name}</h1>
        <hr/>
        <h2>{tagline}</h2>
        <h3>{contributed_by}</h3>
      </div>
    </div>
  );
}
