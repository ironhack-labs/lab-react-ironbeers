import React from "react";
import "./BeerCard.css";
import { Link } from "react-router-dom";

const BeerCard = props => {
  return (
    <Link to={`/beers/${props.id}`}>
      <div className="BeerCard">
        <h3>{props.name}</h3>
        <h4>{props.tagline}</h4>
        <img src={props.image_url} alt="" />
        <p>Created by: {props.created_by}</p>
      </div>
    </Link>
  );
};

export default BeerCard;
