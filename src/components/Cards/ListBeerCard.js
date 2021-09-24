import React from 'react';
import { Link } from 'react-router-dom';

function BeerCard(props) {
  return (
    <Link to={`/beers/${props.id}`} style={{ textDecoration: 'none' }}>
      <div
        className="card flex-row mb-2"
        style={{ width: '22rem', height: '12rem', padding: '15px' }}
      >
        <div
          style={{ width: '5rem', display: 'flex', justifyContent: 'center' }}
        >
          <img
            className="card-img-left"
            src={props.img}
            alt={props.name}
            style={{ height: '150px', width: 'auto' }}
          />
        </div>
        <div className="card-body" style={{ width: '70%' }}>
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.tagline}</h6>
          <p className="card-text" style={{ fontSize: '0.8rem' }}>
            <strong>Created by: </strong>
            {props.contributed}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BeerCard;
