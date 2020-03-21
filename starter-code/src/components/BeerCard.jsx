import React from "react";

const BeerCard = beer => {
  console.log("BEER CARD", beer);

  return (
    <div className="card w-auto beer-card">
      <img src={beer.image_url} className="mx-auto my-5 h-50" alt={`${beer.image_url} image`} />
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <span>{beer.attenuation_level}</span>
        <h6 className="card-title">{beer.tagline}</h6>
        <span>
          <b>{beer.first_brewed}</b>
        </span>
        <p className="card-text">{beer.description}</p>
        <p className="card-text">
          <small className="text-muted">{beer.contributed_by}</small>
        </p>
      </div>
    </div>
  );
};

export default BeerCard;
