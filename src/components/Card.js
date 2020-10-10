import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="card">
      <Link to={props.route}>
        <div className="card-image is-16by9">
          <figure className="image">
            <img src={props.image} alt="Beers" />
          </figure>
        </div>
        <div className="card-content">
          <h2 className="title is-3">{props.title}</h2>
          <div className="content">
            <p className="is-size-6 has-text-grey">{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
