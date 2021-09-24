import React from 'react'

import { Link } from 'react-router-dom'

export default function BeerItem({ _id, name, image_url, contributed_by }) {
    return (

        <div>
            <h1>{name}</h1>
            <img src={image_url} alt='xd'></img>
            <p> {contributed_by}</p>

            <Link to={`/beers/${_id}`}>
                Ver detalles
            </Link>

        </div>                

    )
}