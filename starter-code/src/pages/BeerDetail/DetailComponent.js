import React from 'react';
import { StyledCards } from "../../styles/components";





function DetailComponent(props) {
  
    return (
      <StyledCards>
        <img src={props.image} alt={props.name}/>
        <article>
            <h2>{props.name}</h2>
            <p>{props.tagline}</p>
            <p>{props.brewed}</p>
            <p>{props.level}</p>

            <p>{props.description}</p>
            <h3>{props.contributor}</h3>
        </article>
      </StyledCards>

    )
}
export default DetailComponent;
