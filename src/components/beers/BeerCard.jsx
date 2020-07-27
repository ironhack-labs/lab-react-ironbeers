import React from 'react';
import { Link } from 'react-router-dom';

function BeerCard(props) {
  return (
    <div className="card border-0">
      <div className="row mt-2">
        <div className="col-3 text-center">
          <img
            style={{ height: 100 }}
            className="img-fluid"
            src={props.beer.image_url}
            alt={props.beer.name}
          />
        </div>
        <div className="col d-flex flex-column justify-content-around">
          <h5 className="font-weight-bold">{props.beer.name}</h5>
          <span className="text-secondary font-weight-bold">
            {props.beer.tagline}
          </span>
          <small className="font-weight-bold">
            Created by: {props.beer.name}
          </small>
        </div>
      </div>
      <Link to={`/beers/${props.beer._id}`} className="stretched-link" />
      <hr className="bg-secondary" />
    </div>
  );
}

export default BeerCard;
