import React from "react";
import { Link } from 'react-router-dom';
import "./BeerCard.css";

export default function BeerCard ({image_url, name, tagline, contributed_by, _id}) {
    return (
        
      <Link to={`/beers/${_id}`} className='BeerCard'>
        <img className='BeerCard__img' src={image_url} alt={name} />
        <div className="BeerCard__container">
            <div className="BeerCard__container__info">
                <h1>{name}</h1>
                <h2>{tagline}</h2>
                <p><strong>Created by: </strong>{contributed_by}</p>
            </div>
        <hr className="BeerCard__container__hr" />
        </div>
      </Link>
    )
} 