import React from "react";
import "../beer_card.css";
import {Link} from "react-router-dom";

export default function BeerCard({beer}) {
    return (
        <div className="beer-card-wrapper">
            
            <img src={beer.image_url} alt="Beer" className="beer-img"/>
            <div className="beer-info">
                <h3 className="beer-name">{beer.name}</h3>
                <p className="beer-tagline">{beer.tagline}</p>
                <p className="beer-creator"><span className="creator-label">Created by: </span>{beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`} className="details-link">See details</Link>
            </div>
        </div>
    )
}