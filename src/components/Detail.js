import React from 'react';
import './Details.css';

export default function Detail(props) {
  const beer = props.beer;

  return (
    <div className="single-view">
      <img src={beer.image_url} alt={beer.name} />
      <div className="details">
        <div className="row">
          <div className="title-tag">
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
          </div>
          <div className="brewed-attenuation">
            <h1>{beer.attenuation_level}</h1>
            <p>{beer.first_brewed}</p>
          </div>
        </div>
        <p className="description">{beer.description}</p>
        <div className="contributed-by">{beer.contributed_by}</div>
      </div>
    </div>
  );
}
