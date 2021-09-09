import React from "react"
import "./Beer.css"

export default function Beer ({image_url, name, tagline, contributed_by}) {
    return (
        <div className="Beer">
            <img src={image_url} alt={name} />
            <div className="beerDiv">
                <div className="beerInfo">
                    <h3>{name}</h3>
                    <h5>{tagline}</h5>
                    <p><strong>Created by: </strong>{contributed_by}</p>
                </div>
            </div>
        </div>
    )
}