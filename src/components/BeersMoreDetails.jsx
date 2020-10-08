import React from 'react';
import {Link} from "react-router-dom";

function BeersMoreDetails(props) {
    return (
        <div className="card-wrap">
            <Link to={`/beers/${props.beer._id}`}>
            <img src={props.beer.image_url} alt="beer"/>
            <h3>{props.beer.name}</h3>
            <h4>{props.beer.tagline}</h4>
            <h4>{props.beer.first_brewed}</h4>
            <h4>{props.beer.attenuation_level}</h4>
            <p>{props.beer.description}</p>


            <p>Created by: {props.beer.contributed_by}</p>
            </Link>
        </div>
    )
}

export default BeersMoreDetails
