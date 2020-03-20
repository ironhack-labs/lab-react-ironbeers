import React from "react";

export const SingleBeer = ({
  img,
  name,
  attenuation,
  tag,
  brewed,
  description,
  contributed
}) => (
  <div>
    <img src={img} alt={name} />
    <h1>
      {name} {attenuation}
    </h1>
    <h2>
      {tag} {brewed}
    </h2>
    <h4>{description}</h4>
    <p>{contributed}</p>
  </div>
);
