import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="card">
      <Link to={props.link}>
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <small className="card-text">{props.description}</small>
      </div>
      </Link>
    </div>
  );
};

export default Card;
