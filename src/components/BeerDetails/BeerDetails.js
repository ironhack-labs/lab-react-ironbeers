import React from 'react'
import SCBeerDetails from './BeerDetails.styled'


export default function BeerDetails({ _id, image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by }) {
    return (
        <SCBeerDetails>
            <img src={image_url} alt={name} />
            <div>
                <div className="beer-row">
                    <h2>{name}</h2>
                    <p>{attenuation_level}</p>
                </div>
                <div className="beer-row">
                    <p>{tagline}</p>
                    <p>{first_brewed}</p>
                </div>
                <p>{description}</p>
                <p>{contributed_by}</p>
            </div>
        </SCBeerDetails>
    )
}

