
import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './BeerCard.css'

const BeerCard = ({ _id, name, tagline, contributed_by, image_url }) => {


    return (
        <Col md={4}>
            <Card className="beer-card">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{tagline}</Card.Subtitle>
                    <Card.Text>{contributed_by}</Card.Text>

                    <Link to={`/beers/${_id}`} className="btn btn-dark btn-block btn-sm">Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard