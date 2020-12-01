import React from 'react'

function IdBeer(props) {
    return (
        <div className="beer-container-card">
            <img className="beer-image" src={props.image_url} alt="beer"></img>
            <p><strong>Name:<br></br></strong>{props.name}</p>
            <p><strong>Attenuation level:</strong><br></br> {props.attenuation_level}</p>
            <p><strong>Tag line:<br></br></strong>{props.tagline}</p>
            <p><strong>First brewed:<br></br> </strong>{props.first_brewed}</p>
            <p><strong>Description:<br></br> </strong>{props.description}</p>
            <p><strong>contributed by:<br></br></strong>{props.contributed_by}</p>
        </div>
    )
}

export default IdBeer