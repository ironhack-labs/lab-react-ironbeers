import React from 'react'

const SingleBeer = props => {
    return (
        <div>
            <img src={props.image} alt={props.title}/>
            <h2>{props.name}</h2>
            <p>{props.tagline}</p>
            <p>{props.first_brewed}</p>
            <p>{props.attenuation_level}</p>
            <p>{props.description}</p>
            <p>{props.contributed_by}</p>
        </div>
    )
}

export default SingleBeer
