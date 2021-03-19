import React from 'react'
import '../Styles/OneBeer.css'

function OneBeer(props) {
    const {beer} = props
    return (
        <div className="OneBeer">
                <img src={beer.image_url} alt={beer.name}/>
                <div>
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <p className="specs">{beer.first_brewed} - {beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p className="creator"><b>Created by:</b> {beer.contributed_by}</p>
                </div>
            </div>
    )
}

export default OneBeer
