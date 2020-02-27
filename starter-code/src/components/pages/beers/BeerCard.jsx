import React from 'react'
import './BeerCard.css'
const BeerCard = ({ image_url, name, tagline, contributed_by }) => {
    return (
        <div className="container">
            <div className="row beer-card">
                <div className="col-3 img-container">
                    <img src={image_url} alt={name}></img>
                </div>
                <div className="col-9 data">
                    <p className="title">{name}</p>
                    <p className="tagline">{tagline}</p>
                    <p className="created-by"><span>Created by: </span>{contributed_by}</p>
                </div>
            </div>

        </div>
    )
}

export default BeerCard