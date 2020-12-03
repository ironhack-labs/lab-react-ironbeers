import React from 'react'
import { Col, Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const BeerCard = ({ name, image_url, _id }) => {
    return (
        <Col lg={4}>
            <Card className="beer-card">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/beers/${_id}`}>Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard