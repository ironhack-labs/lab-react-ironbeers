import React from 'react';

const BeerDetails = ({
  image_url,
  name,
  tagline,
  attenuation_level,
  first_brewed,
  description,
  contributed_by,
}) => {
  return (
    <div className="beer-details---wrapper">
      <img src={image_url} alt={name} />
      <div className="d-flex align-items-center">
        <div className="beer-details---col">
          <h1>{name}</h1>
          <p className="beer-details---tagline">{tagline}</p>
        </div>
        <div className="beer-details---col text-right">
          <p className="beer-details---attenuation-level">
            {attenuation_level}
          </p>
          <p className="beer-details---first-brewed">{first_brewed}</p>
        </div>
      </div>
      <p className="beer-details---description">{description}</p>
      <p className="beer-details---contributor">{contributed_by}</p>
    </div>
  );
};

export default BeerDetails;
