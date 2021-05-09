import React from 'react';

export default function Beer({ beer }) {
    return (
        <div className="details">
            <img src={beer.image_url} alt="beer" />
            <h2>{beer.name} <span>{beer.attenuation_level}</span></h2>
            <h5><span>{beer.tagline}</span> {beer.first_brewed}</h5>
            <p>{beer.description}</p>
            <p><span>{beer.contributed_by}</span></p>
        </div>
    )
}