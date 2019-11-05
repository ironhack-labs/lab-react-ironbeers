import React from 'react';


const CardBeerDetail = props => {
  return (
    <div className="card BeersCard singleBeerCard">
      <div className="card-image center">
        <figure className="image image-allbeers">
          <img src={props.img} alt="beer" />
        </figure>
      </div>
      <div className="card-content beerCard-content">
          <div>
            <p className="title is-4">{props.name}</p>
          </div>
        <br />
        <div className="content content-text">
          <p><span className="beer-details">Tagline:</span> {props.tagline}</p>
          <p><span className="beer-details">Attenuation level: </span> {props.attenuation_level}</p>
          <p><span className="beer-details">First brewed: </span> {props.first_brewed}</p>
          <p><span className="beer-details">Description: </span> {props.description}</p>
          <p><span className="beer-details">Contributed_by: </span> {props.contributed_by}</p>
        </div>
      </div>
    </div>
  )
}

export default CardBeerDetail;