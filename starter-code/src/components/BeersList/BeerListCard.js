import React from 'react'

import './BeerListCard.css'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

const BeerCard = ({ name, image_url, _id, tagline, contributed_by }) => {
    return (
        <Col md={12}>
            <Link to={`/detalles/${_id}`}>
                <Card className="card-beer">
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>{tagline}</p>
                        <p>Created By: {contributed_by}</p>
                    </Card.Body>
                    <hr></hr>
                </Card>
            </Link>
        </Col>
    )
}

export default BeerCard