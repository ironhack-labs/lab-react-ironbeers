import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Beer-card.css'

const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {

    return (

        <Col md={3}>
            <Card className="beer-card">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{tagline}</p>
                    <p><strong>Created by:</strong> {contributed_by}</p>
                    <Link to={`/beers/${_id}`} className="btn btn-dark btn-sm" style={{ width: '100%' }}>Details</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard