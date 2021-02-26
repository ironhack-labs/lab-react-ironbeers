import React from 'react';
import './BeerTag.css';
import {NavLink} from 'react-router-dom'

const BeerTag = ({ image_url, name, tagline, contributed_by, _id }) => {
  return (
    <>
    <NavLink className='detailsLink' to={`/${_id}`}>
      <section className='section-tag'>
        <figure>
          <img src={image_url} alt="beer"></img>
        </figure>
        <article>
          <h2>{name}</h2>
          <h4>{tagline}</h4>
          <p>{contributed_by}</p>
        </article>
      </section>
      </NavLink>
    </>
  );
};

export default BeerTag;
