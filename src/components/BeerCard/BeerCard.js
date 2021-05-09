import React from 'react'
import { Link } from 'react-router-dom';
import './Beer.css';

export default function BeerCard({image_url, name, tagline, contributed_by, _id}) {
    return (
        <Link className="details-link" to={`/${_id}`}>
        <div className="beer-card">
            <div className="beerimg">
                <img src={image_url} alt="image beer" />
            </div>
            <div className="cardtext">
                <p className="cardname">{name}</p>
                <p className="cardtag">{tagline}</p>
                <p className="cardcreated"><span className="cardby">Created by: </span>{contributed_by}</p>
            </div>
        </div>
            <hr className="bar"/>
        </Link>
    )
}
