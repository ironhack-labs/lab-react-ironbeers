import React from "react";
import { useNavigate } from "react-router-dom";

function BeerInfo({ beer }) {
  const navigate = useNavigate();
  return (
    <div
      className="beerMainDiv "
      onClick={() => {
        navigate(`/beers/${beer._id}`);
      }}
    >
      <div className="beerImg">
        <img src={beer.image_url} alt="yummy beer"></img>
      </div>
      <div className="beerDescription">
        <h4>{beer.name}</h4>
        <p className="beerTaglineP">{beer.tagline}</p>
        <p>Created by: {beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerInfo;
