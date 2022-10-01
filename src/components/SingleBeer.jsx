import React from "react";
import { useNavigate } from "react-router-dom";

function SingleBeer({ beerInfo }) {
  const { image_url, name, tagline, contributed_by, _id } = beerInfo;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/beers/${_id}`);
      }}
    >
      <div>
        <img src={image_url} alt={name}></img>
      </div>
      <div>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>Created by: {contributed_by}</p>
      </div>
    </div>
  );
}

export default SingleBeer;
