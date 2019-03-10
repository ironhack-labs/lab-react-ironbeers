import React from "react";


const BeerDetail = (props) => (
  <div className="card card-detail">
    <div className="card-image">
      <figure className="image is-b4y5">
        <img src={ props.image_url } className="has-padding-20" alt=""/>
      </figure>
    </div>
    <div className="card-content is-top-paddingless">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{ props.name }</p>
          <p className="subtitle is-6 has-text-grey-light">{ props.tagline }</p>
        </div>
        <div className="media-right">
          <p className="has-text-grey-light title is-4 is-marginless">{ props.attenuation_level }</p>
          <small><strong>{ props.first_brewed }</strong></small>
        </div>
      </div>
      <div className="content">
        <p>{ props.description }</p>
        <small><strong className="has-text-grey-light">{props.contributed_by}</strong></small>
      </div>
    </div>
  </div>
)

export default BeerDetail;
