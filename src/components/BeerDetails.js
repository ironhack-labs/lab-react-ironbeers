import React from 'react'
import { useParams, Link } from 'react-router-dom'

function BeerDetails(props) {
    const { beerId } = useParams()
    const beer = props.beers.find(beer => beer._id === beerId)
    // console.log(beer)

    return (
        <div>
            <header>
                <Link to='/'>Return Home</Link>
            </header>
            <h1>Beer Details</h1>
            <img src={beer.image_url} alt="beer" className="beer-img" />
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <h4>{beer.first_brewed}</h4>
            <h4>{beer.attenuation_level}</h4>
            <p>{beer.description}</p>
            <h4>{beer.contributed_by}</h4>
        </div>
    )
}

export default BeerDetails