import React from 'react'
import { Link } from "react-router-dom"

const BeersCard = ({ id, name, img, tagline, creator }) => {
    return (
        <Link to={`/${id}/details`}>
            <article className="beer-card">
                <figure>
                    <img src={img} alt={name} />
                </figure>
                <div>
                    <h1>{name}</h1>
                    <h2>{tagline}</h2>
                    <small>Created by: {creator}</small>
                </div>
            </article>
        </Link>
    )
}

export default BeersCard