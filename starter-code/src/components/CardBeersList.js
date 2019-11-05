import React from 'react';
import { Link } from 'react-router-dom';

const CardBeersList = props => {
  return (
    <Link to={props.link}>
    <div className="card BeersCard">
      <div className="card-image center">
        <figure className="image image-allbeers">
          <img src={props.img} alt="beer" />
        </figure>
      </div>
      <div className="card-content beerCard-content">
        {/* <div className="media"> */}
          
          <div>
            <p className="title is-4">{props.name}</p>
          </div>
        {/* </div> */}

        <div className="content content-text">
          <p>{props.tagline}</p>
          <p>{props.contributed_by}</p>
          <br />
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CardBeersList;