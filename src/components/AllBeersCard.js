import React from 'react'
//import { Link } from 'react-router-dom'

export default function AllBeersCard({ _id, name, image_url, tagline, contributed_by }) {
    return (
        <div className="beer-card">
            <h1>{name}</h1>
            <img src={image_url} alt="Girl in a jacket" width="500" height="600" />
            <p>{tagline}</p>
            <h4>Created by: {contributed_by}</h4>
        </div>
    )
}

