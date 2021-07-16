import { Link } from "react-router-dom"
import React from "react"

const BeersCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (
        <article>
            <img src={image_url} />
            <h1>{name}</h1>
            <p>{tagline}</p>
            <p>Created by:{contributed_by}</p>

            <Link key={_id} to={`/beers/${_id}`}>Holi</Link>


        </article>


    )
}

export default BeersCard