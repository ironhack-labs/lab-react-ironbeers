import React from 'react'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

const BeerCard = ({ image_url, name, tagline, first_brewed }) => {

    return (
        <Col className="coaster-card" md={4}>
            <img src={image_url} alt={name} />
            <h3>{name}</h3>
            <p>{tagline}</p>
            <small>Brewed: {first_brewed}</small>
            <br></br>
            {/* <Link className="btn btn-sm btn-dark" to={`/coasters/${_id}`}>Ver detalles</Link> */}
        </Col >
    )
}


export default BeerCard