import React from 'react'

import './BeerDetails.css'



const BeerDetailsCard = ({ name, image_url, tagline, contributed_by, description }) => {
    return (
        <div className="Details">
            <img src={image_url} alt='beer' />
            <h1>{name}</h1>
            <p>{tagline}</p>
            <p>{description}</p>
            <p>{contributed_by}</p>
        </div>
    )
}

export default BeerDetailsCard