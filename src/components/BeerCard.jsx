import React from "react";
import { Link } from "react-router-dom";

const BeerCard = (props) => {
  const beer = props.beer;
  return (
    <div className="BeerCard">
      <h3>
        <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
      </h3>
      <img src={beer.image_url} alt={beer.image_url} />
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>Created by: {beer.contributed_by}</p>
    </div>
  );
};

export default BeerCard;
