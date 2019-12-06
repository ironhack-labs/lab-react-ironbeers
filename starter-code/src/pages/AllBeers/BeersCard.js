import React from 'react';
import { Link } from "react-router-dom";
import { BeerCards } from '../../styles/components';

function BeerCardComp (props) {
  return (
    <BeerCards>
      <Link to={`all-beers/${props.route}`}>
        <img src={props.image}/>
        <article>
          <h3>{props.name}</h3>
          <p>{props.tagline}</p>
          <small>Created by. {props.contributor}</small>
        </article>
      </Link>
    </BeerCards>
  )
};

export default BeerCardComp;