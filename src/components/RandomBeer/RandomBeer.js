import React from 'react';
import NavBar from '../Navbar/NavBar';

export default function RandomBeer(props) {
  return (
    <div>
      <NavBar />
      <div className="single-beer-card">
        <div className="image-container">
          <img src={props.beer.image_url} alt={props.beer.name} />
        </div>
        <div className="single-beer-details">
          <h4>{props.beer.name}</h4>
          <p>{props.beer.attenuation_level}</p>

          <h5>{props.beer.tagline}</h5>
          <p>{props.beer.first_brewed}</p>
          <h6>{props.beer.description}</h6>
          <p>
            <span>Created by: </span>
            {props.beer.contributed_by}
          </p>
        </div>
      </div>
    </div>
  );
}
