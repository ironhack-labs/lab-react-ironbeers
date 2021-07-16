import React from 'react'
import './BeerPages.css'


const BeerCard = (props) => {
    const beers = props.beers

    return (



        <div className="beer-card">

            <img src={beers.image_url} alt={beers.name}></img>
            <div>
                <h1>{beers.name}</h1>
                <h3>{beers.attenuation_level}</h3>
                <h4>{beers.tagline}</h4>
                <h4><strong>{beers.first_brewed}</strong></h4>
                <p>{beers.description}</p>
                <h4><strong>{beers.contributed_by}</strong></h4>
            </div>
        </div>

    )
}

export default BeerCard