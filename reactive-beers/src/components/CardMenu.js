import React from "react";
import { Link } from 'react-router-dom';


const CardMenu = (props) => (
    <Link to={ props.path }>
      <div className="card card-home">
        <div className="card-image">
          <figure className="image">
            <img src={ props.image } alt="placeholder"/>
          </figure>
        </div>
        <div className="card-content is-top-paddingless">
          <div className="media">
            <div className="media-content">
              <p className="title is-5 is-marginless">{ props.title }</p>
              <small className="has-text-grey">{ (props.description.length > 100) ? `${props.description.slice(0, 100)} ...` : props.description }</small>
            </div>
          </div>
        </div>
        <div className="content">
          { props.description }
        </div>
      </div>
    </Link>
)


export default CardMenu;