import React from 'react'
import SCBeerList from './BeerItem.styled'
import { Link } from 'react-router-dom'

export default function BeerItem({ _id, image_url, name, tagline, contributed_by }) {
    return (
        <SCBeerList>
            <img src={image_url} alt={name} />
            <Link to={`/beers/${_id}`}>
                <h2>{name}</h2>
            </Link>
            <p>{tagline}</p>
            <p>{contributed_by}</p>
        </SCBeerList>
    )
}
