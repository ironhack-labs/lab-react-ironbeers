import React from 'react'

function IdBeer(props) {
    return (
        <div className="beer-container">
            <img className="beer-image" src={props.image_url} alt="cerveza"></img>
            <h3>{props.name}</h3>
            <span>{props.attenuation_level}</span>
            <span>{props.tagline}</span>
            <span>{props.first_brewed}</span>
            <p>{props.description}</p>
            <span>{props.contributed_by}</span>
        </div>
    )
}

export default IdBeer
