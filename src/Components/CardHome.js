import React from 'react'
import { Link } from 'react-router-dom';

function CardHome(props) {
    return (
        <Link to={props.to}>
        <div>
            <img className= "beer-image" src={props.image} alt="beer"></img>
            <h2>{props.title}</h2>
        </div>
        </Link>
    )
}

export default CardHome
