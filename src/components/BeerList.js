import React from "react";
export const BeerList = ({ image_url, name, tagline, contributed_by }) => {
  return (
    <li>
      <img width="50px" src={image_url} alt={name} />
      <ul>
        <li>
          <h2>{name}</h2>
        </li>
        <li>{tagline}</li>
        <li>contributed by: {contributed_by}</li>
      </ul>
    </li>
  );
};
