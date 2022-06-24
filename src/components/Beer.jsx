import React from "react";

const Beer = ({
  beer: {
    image_url,
    name,
    attenuation_level,
    tagline,
    first_brewed,
    description,
    contributed_by,
  },
}) => {
  return (
    <div className="beer-details">
      <img src={image_url} alt="beer_pic" />
      <h2>{name}</h2>
      <span>{attenuation_level}</span>
      <h3>{tagline}</h3>
      <span>{first_brewed}</span>
      <p>{description}</p>
      <span>{contributed_by}</span>
    </div>
  );
};

export default Beer;
