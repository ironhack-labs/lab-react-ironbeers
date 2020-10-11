import React from 'react';

const SingleBeer = (props) => {
  console.log('props', props);
  return (
    <div className="single-beer-card">
      <img
        src={props.beer.image_url}
        alt={props.beer.name}
        className="single-beer-img"
      />
      <div className="flex space center">
        <h3 className="title">{props.beer.name}</h3>
        <p className="grey">{props.beer.attenuation_level}</p>
      </div>
      <div className="flex space">
        <p className="grey">{props.beer.tagline}</p>
        <p>{props.beer.first_brewed}</p>
      </div>
      <p>{props.beer.description}</p>
      <p className="grey">{props.beer.contributed_by}</p>
    </div>
  );
};

export default SingleBeer;
