import React from "react";

const SingleBeer = ({
  image_url,
  name,
  attenuation_level,
  tagline,
  first_brewed,
  description,
  contributed_by,
}) => {
  return (
    <div className="single-beer">
      <div className="sinlge-beer-picture">
        <picture>
          <img src={image_url} alt="beerimage" />
        </picture>
      </div>
      <div className="single-beer-info">
        <div className="name-and-attenuation">
          <p className="single-beer-name">{name}</p>
          <p className="single-beer-attenuation">{attenuation_level}</p>
        </div>
        <div className="tag-and-brewed">
          <p className="single-beer-tag">{tagline}</p>
          <p className="single-beer-brewed">{first_brewed}</p>
        </div>
        <p>{description}</p>
        <p className="single-beer-contributed">{contributed_by}</p>
      </div>
    </div>
  );
};

export default SingleBeer;
