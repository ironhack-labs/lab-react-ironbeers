import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({image, name, tagline, id}) => {
    return (
        <div>
            <Link to={`/beers/${id}`} title={name}>
                <div className="beer-card">
                    <div className="beer-col">
                    <div className="beer-image">
                        <img src={image} alt={name} />
                    </div>
                    </div>
                    <div className="beer-col">
                    <h2>{name}</h2>
                    <p className="beer-tagline">{tagline}</p>
                    <p className="beer-contributor">
                        <b>Created by:</b> {name}
                    </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BeerCard
