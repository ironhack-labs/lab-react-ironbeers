import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = (props) => {
  return (

    <div className="box">
    <Link to={`/beers/${props._id}`}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.image_url} width='50px'/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <article>
                <h3>{props.name}</h3> <br />
                <p>{props.tagline}</p>
                <p>Created by:  {props.contributed_by}</p>
              </article>
            </div>
          </div>
        </article>
        </Link>
      </div>
  )    
}

export default BeerCard;