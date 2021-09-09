import React from 'react';
import { Link } from "react-router-dom";
import './Beer.css';

export default function Beer({ image_url, name, tagline, contributed_by }) {
  return (
      <div className='Beer'>
        <div className='Beer__info'>
          <Link style={{ textDecoration: 'none' }} to={'/beers/:beerId'}>
            <img src={image_url} alt={name} />
            <div className='Beer__info__container'>
                <div className='Beer__info__text'>
                    <h1>{name}</h1>
                    <h3>{tagline}</h3>
                    <p><strong>Created by: </strong>{contributed_by}</p>
                </div>
                <hr />
            </div>
          </Link>
        </div>
      </div>
  )
}