import React from "react";

export const SingleBeer = ({beer}) => {
  return (
    <div>
      <img src={beer.image_url} />
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  )
};