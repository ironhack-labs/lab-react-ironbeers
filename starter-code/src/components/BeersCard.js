import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


const Beers = ({ _id, image_url, name, tagline, contributed_by }) => {

    return (
        <Col className="beer-card" md={4}>
            <img src={image_url} alt={name} className="random"/>
            <h3>{name}</h3>
            <p>{tagline}</p>
            <small>Created: {contributed_by}</small>
            <br></br>
            <Link className="btn btn-sm btn-dark" to={`/details-beer/${_id}`}>Ver detalles</Link>
        </Col >
    )
}


export default Beers 