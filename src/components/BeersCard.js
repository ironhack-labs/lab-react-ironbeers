import React from 'react'
import './BeersCard.css'

const BeerCard = ({ image, name, tagline, contributed_by, _id }) => {

    return (
        <>
            <div><img src={image} alt="beer bottle" /></div>
            <div>
                <h3>{name}</h3>
                <p>{tagline}</p>
                <p><span>{contributed_by}</span></p>
            </div>
        </>
    )
}

export default BeerCard