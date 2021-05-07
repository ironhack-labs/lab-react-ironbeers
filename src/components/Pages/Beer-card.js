import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeerCard = ({ image, name, tagline, contributed_by, _id }) => {

    return (
        <Col md={3}>
            <Card className="coaster-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{tagline}</p>
                    <p>{contributed_by}</p>
                    <Link to={`/montañas-rusas/detalles/${_id}`} className="btn btn-dark btn-sm" style={{ width: '100%' }}>Detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard