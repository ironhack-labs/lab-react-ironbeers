import React from 'react';

const BeerItem = (props) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={props.image_url}/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
          <p className="subtitle is-6">{props.tagline}</p>
          <p className="subtitle is-8">{props.contributed_by}</p>
        </div>
      </div>
    </div>
</div>
);

export default BeerItem;