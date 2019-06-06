import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({ _id, image_url, name, tagline, contributed_by }) => {
    return (
        <div>
            <article >
                <img src={image_url} alt={name} />
                <header>
                    <h1>{name}</h1>
                    <p>{tagline}</p>
                    <p>{contributed_by}</p>
                    <Link className="btn btn-sm btn-outline-dark" to={`/beers/${_id}`}> Ver detalles </Link>
                </header>
            </article>
        </div>
    )
}

export default BeerCard