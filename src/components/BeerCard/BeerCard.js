import React from 'react';

function BeerCard({beer}){
  return(
    <div>
      <img src={beer.image_url} alt={beer.name}></img>
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  )
}

export default BeerCard