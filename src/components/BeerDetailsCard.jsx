import React from "react";

function BeerDetailsCard({ beer }) {
  return (
    <div className="beer-details">
      <img src={beer.image_url} alt={beer.name} height={300} />
      <h3>{beer.name}</h3>
      <h4>{beer.tagline}</h4>
      <h5>First brewed: {beer.first_brewed}</h5>
      <p>Attenuation level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <h6>{beer.contributed_by}</h6>
    </div>
  );
}

export default BeerDetailsCard;
