import React from 'react'

const OneBeerCard = props => {
    return (
        <div className="card cardOneBeer">
            <img src={props.image_url} class="card-img-top imgBeerCard" alt={props.name} />
            <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                <p className="card-text description">{props.tagline}</p>
                <p className="card-text">{props.first_brewed}</p>
                <p className="card-text">{props.attenuation_level}</p>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.contributed_by}</p>               
            </div>
        </div>
    )
}

export default OneBeerCard