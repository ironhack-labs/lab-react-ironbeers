import React from 'react';
import {Link} from "react-router-dom";

function BeersDetails(props) {
    return (
        <div className="card-wrap">
            <Link to={`/beers/${props.beer._id}`}>
            <img src={props.beer.image_url} alt="beer"/>
            <h3>{props.beer.name}</h3>
            <h4>{props.beer.tagline}</h4>
            <p>Created by: {props.beer.contributed_by}</p>
            </Link>
        </div>
    )
}

export default BeersDetails
