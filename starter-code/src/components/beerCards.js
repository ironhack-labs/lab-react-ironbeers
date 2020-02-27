import React from 'react'


import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

const BeerCards = ({ name, image_url, tagline, _id }) => {
    return (
        <Col md={4}>
            <Card className="card-details1">
                <Col md={4}>

                    <Card.Img variant="top" src={image_url} />
                </Col>

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <hr></hr>
                    <p>{tagline}</p>
                    <p>Created by: {name}</p>

                    <Button as="div" variant="dark" size="sm">
                        <Link to={`/${_id}`}>Detalles</Link>
                    </Button>
                </Card.Body>

            </Card>
        </Col>
    )
}

export default BeerCards