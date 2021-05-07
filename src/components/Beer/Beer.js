import React from 'react'
import { Link } from 'react-router-dom';

export default function Beer({image_url, name, tagline, contributed_by}) {
    return (
        <Link to="/beers/:id">
        <div>
            <p>{name}</p>
            <img src={image_url} alt="image beer" />
            <p>{tagline}</p>
            <p>{contributed_by}</p>
        </div>
        </Link>
    )
}
