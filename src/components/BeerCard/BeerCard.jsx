import React from "react";
import { Link } from 'react-router-dom';
import "./BeerCard.css";

export default function BeerCard ({image_url, name, tagline, contributed_by, _id}) {
    return (
        
      <Link to={`/beers/${_id}`} className='BeerCard'>
        <img src={image_url} alt={name} />
        <div className="beerDiv">
            <div className="beerInfo">
                <h3>{name}</h3>
                <h5>{tagline}</h5>
                <p><strong>Created by: </strong>{contributed_by}</p>
            </div>
        </div>
      </Link>
    )
} 