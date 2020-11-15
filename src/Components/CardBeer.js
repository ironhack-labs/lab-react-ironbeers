import React from 'react'
import { Link } from 'react-router-dom'

function CardBeer(props) {
    return (
        <Link to={`/beers/${props.id}`}>
        <div className="beer-container">
            <img className="beer-image" src={props.image_url} alt ="beer"></img>
            <h3>{props.name}</h3>
            <span>{props.tagline}</span>
            <span> Created by: {props.contributed_by}</span>
        </div>
        </Link>
    )
}

export default CardBeer
