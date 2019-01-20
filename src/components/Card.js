import React from "react";
import { NavLink } from "react-router-dom";

export const Card = ({ title, image, to }) => {
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-3by1">
            <img alt="beer-draft" src={image} />
          </figure>
        </div>
        <div className="card-content">
          <NavLink to={to} className="title is-4">{title}</NavLink>
        </div>
      </div>
    </div>
  );
};
