import React from "react";
import { NavLink } from "react-router-dom";

export default function OneBeer({
  image,
  name,
  tagline,
  contributor,
  firstBrewed,
  level,
  description,
  id
}) {
  return (
    <div>
      <div className="beer-container">
        <div className="beer-img-container">
          <img src={image} alt={name} />
        </div>
        <div className="beer-text-container">
          <h1>{name}</h1>
          <p>{tagline}</p>
          <p>Created by:{contributor}</p>
          <p>{firstBrewed}</p>
          <p>{level}</p>
          <p>{description}</p>
          <NavLink className="btn-details" to={`/beer-details/${id}`}>
            Beer Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}
