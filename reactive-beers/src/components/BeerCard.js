import React, { Component } from "react";

const BeerCard = props => {
  return (
    <div className="card">
      <h6>{props.name}</h6>
      <p>{props.description}</p>
      <img style={{ width: 100 }} src={props.image_url} alt={props.name} />
    </div>
  );
};

export default BeerCard;
