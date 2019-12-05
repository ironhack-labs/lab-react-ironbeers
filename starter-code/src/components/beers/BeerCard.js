import React from 'react'
import Col from 'react-bootstrap/Col'
import './beers.css';


import { Link } from 'react-router-dom'

const BeerCard = ({ _id, name, tagline, contributed_by, image_url }) => {

    return (
        <Col className="beer-card" md={4}>
            <img src={image_url} alt={name} />
            <h3>{name}</h3>
            <p>{tagline}</p>
            <br></br>
            <Link className="btn btn-sm btn-dark" to={`/beers/${_id}`}>Ver detalles</Link>
        </Col >
    )
}


export default BeerCard