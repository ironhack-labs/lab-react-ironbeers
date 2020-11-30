import React from 'react';

function OneBeer(props) {
  return (
    <div className="oneBeer">
      <h2>{props.beer.name}</h2>
      <img src={props.beer.image_url} alt={props.beer.name} />
      <q>{props.beer.tagline}</q>
      <p>
        <b>{props.beer.attenuation_level}</b>
      </p>
      <p>{props.beer.description}</p>
      <p>
        <i>{props.beer.contributed_by}</i>
      </p>
    </div>
  );
}

export default OneBeer;
