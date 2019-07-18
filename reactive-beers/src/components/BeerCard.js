import React from "react";
import { Link } from "react-router-dom";

const BeerCard = props => {
  return (
    <div className="card">
      <Link to={`/beers/${props._id}`}>
        <h6>{props.name}</h6>
      </Link>
      <p>{props.description}</p>
      <img style={{ width: 100 }} src={props.image_url} alt={props.name} />
    </div>
  );
};

export default BeerCard;
