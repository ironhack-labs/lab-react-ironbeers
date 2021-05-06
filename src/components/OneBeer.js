import React from "react"
import "./OneBeer.css"

const OneBeer = props => {
    return (
        <div className="beerDetails">
            <figure>
                <img src={props.image_url} />
            </figure>
            <div className="mainInfo">
                <div>
                    <h1>{props.name}</h1>
                    <h2>{props.tagline}</h2>
                </div>
                <div>
                    <p>{props.attenuation_level}</p>
                    <p>{props.first_brewed}</p>
                </div>
            </div>
            <div>
                <p>{props.description}</p>
                <span><strong>{props.contributed_by}</strong></span>
            </div>
        </div>
    )
}

export default OneBeer