import React from 'react';
import { Link } from 'react-router-dom';

const CardHome = props => {
  return (
    <div className="card">
      <Link to = {props.link}> 
      <div className="card-image">
        <figure className="image is-3by1">
          <img src={props.img} alt="beers" />
        </figure>
      </div>
      </Link>
      <div className="card-content">
        <Link to = {props.link}><p className="title is-4">{props.title}</p></Link>
        <br />
        <div className="content">
        <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default CardHome;