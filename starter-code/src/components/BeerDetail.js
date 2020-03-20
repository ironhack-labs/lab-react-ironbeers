import React from 'react';

const BeerDetail = (props) => {
  const {image_url, name, tagline, attenuation_level, first_brewed, description, contributed_by} = props.beer;

  return(
  <div>
    <img src={image_url}></img>
    <h1>{name}</h1>
    <h2>{tagline}</h2>
    <p>{attenuation_level}</p>
    <p>{first_brewed}</p>
    <p>{description}</p>
    <p>{contributed_by}</p>
    </div>    
  );
}

export default BeerDetail;