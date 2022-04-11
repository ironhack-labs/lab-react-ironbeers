import React from "react";
import "./BeerDetails.css";

const BeerDetails = ({ beer }) => {
  return (
    <div className="beer-details">
      <img src={beer.image_url} alt="beer" />
      <div>
        <h1>{beer.name}</h1>
        <p>{beer.attenuation_level}</p>
      </div>
      <div>
        <div>{beer.tagline}</div>
        <p>{beer.first_brewed}</p>
      </div>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;
