import React from 'react'

export default function BeerComponent({beer}) {
    return (
        <div className="beer">
            <img className="img-beer" src={beer.image_url}/>
            <h3 className="text">{beer.name}</h3>
            <h5 className="text">{beer.tagline}</h5>
            <p className="text">{beer.attenuation_level}</p>
            <p className="text">{beer.description}</p>
            <p className="text">{beer.first_brewed}</p>
            <p className="text">{beer.contributed_by}</p>
        </div>
    )
}
