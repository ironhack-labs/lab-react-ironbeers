import React from 'react';
import { BeerDetail } from '../../styles/components';

function BeerDetailComp (props) {
  return (
    <BeerDetail>
      <img src={props.image}/>
        <article>
          <h3>{props.name}</h3>
          <h4>{props.tagline}</h4>
          <h4>{props.attenuation}</h4>
          <small>{props.firstB}</small>
          <p>{props.description}</p>
          <small>{props.contributor}</small>
        </article>
    </BeerDetail>
  )
};

export default BeerDetailComp;