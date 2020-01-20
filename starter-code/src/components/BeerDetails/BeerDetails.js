import React from "react";
import "./BeerDetails.css";

const BeerDetails = props => {
  if (!props.first_brewed) {
    return (
      <div className="beerdetails">
        <h1>{props.name}</h1>
        <h3>{props.tagline}</h3>
        <img src={props.image_url} alt="Beer" />
        <p>{props.description}</p>
        <h6>{props.created_by}</h6>
      </div>
    );
  } else {
    return (
      <div className="beerdetails">
        <h1>{props.name}</h1>
        <h3>{props.tagline}</h3>
        <img src={props.image_url} alt="Beer" />
        <p>{props.description}</p>
        <h6>{props.created_by}</h6>
        <h6>{props.first_brewed.slice(0, 4)}</h6>
      </div>
    );
  }
};

export default BeerDetails;
