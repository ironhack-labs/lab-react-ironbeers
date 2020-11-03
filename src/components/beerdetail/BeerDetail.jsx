import React from 'react'


export default function BeerDetail(props) {

    const id = props.match.params.idBeer
    const beersArray = props.beers
    const beerDetails = beersArray.find(beer => beer._id === id)
    console.log(beerDetails)

    return (
        <div className="card mb-3" style="max-width: 540px;">
            <img className='card-img' src={beerDetails.image_url} alt={beerDetails.name}></img>
            <h2>{beerDetails.name}</h2>
            <h3>{beerDetails.tagline}</h3>
            <p>{beerDetails.first_brewed}</p>
            <p>{beerDetails.attenuation_level}</p>
            <p>{beerDetails.description}</p>
            <h4>Created by: {beerDetails.contributed_by}</h4>
        </div>
    )
}
