import React from "react";

export const BeerDetail = ({beer}) => {
  return (
    <React.Fragment>
      <figure className="image is-4by5">
        <img src={beer.image_url} alt="beer" />
      </figure>
      <div className="container sectionOneSB">
        <p className="title">{beer.name}</p>
        <p className="has-text-grey">{beer.attenuation_level}</p>
      </div>

      <div className="container sectionTwoSB">
        <p className="subtitle has-text-grey">{beer.tagline}</p>
        <p>
          <strong>{beer.first_brewed}</strong>
        </p>
      </div>

      <div className="container sectionThreeSB">
        <p id="description">{beer.description}</p>
        <p>
          <strong className="has-text-grey">
            {beer.contributed_by}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};
