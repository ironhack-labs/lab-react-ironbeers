import React from 'react';
import { Link } from 'react-router-dom';
import "./BeerListElement.css"

export default function BeerListElement({image_url, name, tagline, contributed_by, _id}) {
    return (
        <div className="beer-list-element-container">
            <Link to={`/${_id}`}>
                <div className="beer-list-element">
                    <img src={image_url} alt=""></img>
                    <div className="beer-info-box">
                        <h3>{name}</h3>
                        <h4>{tagline}</h4>
                        <p>{contributed_by}</p>
                    </div>
                </div>
            </Link>
            <div className="separator-list"></div>
        </div>

    )
}
