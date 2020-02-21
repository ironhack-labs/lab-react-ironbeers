import React from 'react'

export default function BeerDetails({beerToDisplay}) {
    return (
        <div>
            <div>
                <img alt="" src={beerToDisplay.image_url} width="50"/>
                <div>{beerToDisplay.name}</div>
                <div>{beerToDisplay.tagline}</div>
                <div>{beerToDisplay.first_brewed}</div>
                <div>{beerToDisplay.attenuation_level}</div>
                <div>{beerToDisplay.contributed_by}</div>
                <p>{beerToDisplay.description}</p>
            </div>
        </div>
    )
}
