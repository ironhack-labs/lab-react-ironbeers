import React, { useContext } from "react";
import { BeerContext } from "../api/beer.api";

const BeerListItem = ({ _id, image_url, name, tagline, contributed_by }) => {
  const { getBeers } = useContext(BeerContext);
  return (
    <div className="container" onClick={() => getBeers(`/beers/${_id}`)}>
      <div className="row">
        <div className="col-2 beer-img-container">
          <img src={image_url} className="beer-img" alt={`${name} image`} />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{tagline}</p>
            <p className="card-text">
              <small className="text-muted">{contributed_by}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerListItem;
