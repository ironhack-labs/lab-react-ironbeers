import React from "react";

const BeerDetail = (props) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={ props.image_url } alt="Placeholder image"/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        
        <div className="media-content">
          <p className="title is-4">{ props.name }</p>
          <p className="subtitle is-6">{ props.tagline }</p>
          <p>{ props.attenuation_level }</p>
          <p>{ props.first_brewed }</p>
          <p>{ props.brewers_tips }</p> 
        </div>
      </div>

      <div className="content">
        <p>{props.description}</p>
        <small>{props.contributed_by}</small>
      </div>
    </div>
  </div>
)

export default BeerDetail;
