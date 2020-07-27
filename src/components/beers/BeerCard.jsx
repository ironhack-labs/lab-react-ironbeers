import React from 'react';

function BeerCard(props) {
  return (
    <div>
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
      <hr className="bg-secondary" />
      <a href={`/beers/${props.beer._id}`} className="stretched-link"></a>
    </div>
  );
}

export default BeerCard;
