import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/BeerCard.css';

const BeerCard = (props) => {
  return (
    <Link to={"/details/" + props.beer._id} className="BeerCard">
      <div className="BeerCard__img-wrapper">
        <img src={props.beer.image_url} alt="b" />
      </div>
      <article className="BeerCard__content">
        <h2 className="BeerCard__name">{props.beer.name}</h2>
        <p className="BeerCard__tagline">{props.beer.tagline}</p>
      </article>
    </Link>
  );
};

export default BeerCard;
