import React from 'react';
import { Link } from 'react-router-dom';

function SingleBeer(props) {
  return (
    <div className="page-content">
      <header>
        <Link to="/" className="home-link">
          Home
        </Link>
      </header>
      <div>
        <img
          className="beer-photo"
          src={props.image_url}
          alt={props.name + 'image'}
        />
        <div className="beer-header">
          <div className="left">
            <h2>{props.name}</h2>
            <h3>{props.tagline}</h3>
          </div>
          <div className="right">
            <h3>{props.attenuation_level}</h3>
            <p>{props.first_brewed}</p>
          </div>
        </div>
        <div className="beer-content">
          <p>{props.description}</p>
          <h5>{props.contributed_by}</h5>
        </div>
      </div>
    </div>
  );
}

export default SingleBeer;
