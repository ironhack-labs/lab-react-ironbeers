import React from 'react';
import { Link } from 'react-router-dom';

const BeerItem = (props) => {
  return (

    <div className="card fixed-card">
      <div className="card-image">
        <figure className="image">
          <img src={props.image_url} alt={props.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <Link to={`/beers/${props._id}`}>
              <p className="title has-text-centered is-3">{props.name}</p>
              <p className="subtitle has-text-centered is-6">{props.tagline}</p>
            </Link >
            <p className="subtitle has-text-left is-7">Created by {props.contributed_by}</p>
          </div>
        </div>
        <div className="content has-text-left is-size-7">{props.description}</div>
      </div>
    </div>

  )
}

export default BeerItem;