import React, { useEffect, useState } from "react";
import { beerDetails } from "../lib/beers.api";

export const BeerId = props => {
  const id = props.match.params.id;
  const [beer, setBeer] = useState({});

  useEffect(() => {
    beerDetails(id).then(beer => setBeer(beer));
  }, [id]);

  return (
    <div>
      <div className="div">
        <div className="divImagen">
          <img className="imagen" src={beer.image_url} alt={beer.name}></img>
        </div>
        <div>
          <div className="blockDetails">
            <h3>{beer.name}</h3>
            <h3 className="colorGray">{beer.attenuation_level}</h3>
          </div>
          <div className="blockDetails">
            <h3 className="colorGray">{beer.tagline}</h3>
            <h3>
              <b>{beer.first_brewed}</b>
            </h3>
          </div>
        </div>
        <h4>{beer.description}</h4>
        <h4 className="colorGray">{beer.contributed_by}</h4>
      </div>
    </div>
  );
};
