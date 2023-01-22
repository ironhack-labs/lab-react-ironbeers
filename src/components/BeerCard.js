import React from 'react'

const BeerCard = ({ image_url, name, tagline, contributed_by }) => {
    return (
        <div className='card'>
            <img className="beerImg" src={image_url} alt={name} />
            <h2>{name}</h2>
            <p>{tagline}</p>
            <p>{contributed_by}</p>
        </div>
    )
}

export default BeerCard