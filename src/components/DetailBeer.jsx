import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/DetailBeer.css';

export default function DetailBeer(props) {
  const beer = props.beer;

  return (
    <div className="container text-center mb-5">
      <img src={beer.image_url} alt={beer.name} className="img-detail" />
      <div className="description text-left col-md-6">
        <div className="float-right">
          <h5 className="text-secondary text-right">{beer.attenuation_level}</h5>
          <p>
            <b>{beer.first_brewed}</b>
          </p>
        </div>
        <h3>{beer.name}</h3>
        <h5 className="text-secondary mt-4 mb-4">{beer.tagline}</h5>

        <p className="p-detail">{beer.description}</p>
        <p className="text-secondary"><b>{beer.contributed_by}</b></p>
      </div>
      <Link to={props.randomBeer ? '/' : '/beers'} className="btn btn-outline-success mt-5">
        {props.randomBeer ? 'Back to home' : 'Back to all Beers'}
      </Link>
    </div>
  );
}
