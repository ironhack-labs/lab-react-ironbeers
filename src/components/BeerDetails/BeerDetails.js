import React from 'react'
import SCBeerDetails from './BeerDetails.styled'


export default function BeerDetails({ _id, image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by }) {
    return (
        <SCBeerDetails>
            <img src={image_url} alt={name} />
            <p>{tagline}</p>
            <p>{first_brewed}</p>
            <p>{attenuation_level}</p>
            <p>{description}</p>
            <p>{contributed_by}</p>
        </SCBeerDetails>
    )
}

