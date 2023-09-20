import React from "react";
import { Link } from "react-router-dom";

function BeerCard({ beer }) {
  const { image_url, tagline, name, contributed_by, _id } = beer;
  return (
    <div className="beer-card">
      <div
        className="image"
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <div className="container">
        <h3>{name}</h3>
        <p>{tagline}</p>
        <h4>{contributed_by}</h4>
        <Link to={`/beers/${_id}`}>More details</Link>
      </div>
    </div>
  );
}

export default BeerCard;
