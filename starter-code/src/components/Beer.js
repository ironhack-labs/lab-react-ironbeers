import React from "react";

const Beer = params => {
  return (
    <div className="container single-beer">
      <img src={params.beer.image_url} alt="beer" />
      <div className="beer-info">
        <div className="beer-details">
          <h3>{params.beer.name}</h3>
          <h3 class="attenuation">{params.beer.attenuation_level}</h3>
        </div>
        <div className="beer-details">
          <h4 class="tagline">{params.beer.tagline}</h4>
          <span>{params.beer.first_brewed}</span>
        </div>

        <p>{params.beer.description}</p>
        {params.beer.contributed_by && (
          <h5>
            Created by: <span>{params.beer.contributed_by}</span>
          </h5>
        )}
      </div>
    </div>
  );
};

export default Beer;
