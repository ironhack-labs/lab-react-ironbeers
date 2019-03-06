import React from 'react';

const BeerDetailed = (props) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={props.image_url} alt="Placeholder image"/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media-content">
        <p className="title is-4">{props.name}</p>
        <p className="subtitle is-6">{props.tagline}</p>
      </div>
    </div>
    <div className="content">
      {props.children}
    </div>
  </div>
);

export default BeerDetailed;