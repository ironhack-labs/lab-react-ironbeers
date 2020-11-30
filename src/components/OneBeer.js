import React from 'react';

function OneBeer(props) {
  return (
    <div className="oneBeer">
      <h2>{props.beer.name}</h2>
      <img src={props.beer.image_url} alt={props.beer.name} />
      <p>{props.beer.tagline}</p>
      <p>{props.beer.attenuation_level}</p>
      <p>{props.beer.description}</p>
      <p>{props.beer.contributed_by}</p>
    </div>
  );
}

export default OneBeer;
