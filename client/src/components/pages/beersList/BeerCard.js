import React from 'react'
import { Link } from 'react-router-dom'


export default ({ _id, image_url, name, tagline, contributed_by }) => {

    return (
        <>
            <Link to={`/beers/details/${_id}`}><img src={image_url} alt={name} />
                <p>{name}</p>
                <p>{tagline}</p>
                <p>{contributed_by}</p>
            </Link>
        </>
    )
}
