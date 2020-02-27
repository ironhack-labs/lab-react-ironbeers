import React from 'react'
import { Link } from 'react-router-dom'

const CardBeer = ({ name, image_url, _id,tagline,contributed_by }) => {
    return (
        <>
            <div>
                <Link to={`/${_id}`}>
                    <img src={image_url} alt={name}/>
                </Link>
                <h1>{name}</h1>
                <p>{tagline}</p>
                <p>{contributed_by}</p>
            </div>
        </>
    )
}

export default CardBeer