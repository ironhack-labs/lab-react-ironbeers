import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeerItem = ({ _id, image_url, name, tagline, contributed_by }) => {

    return (
        <Col xs={4} className="mb-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h3>{tagline}</h3>
                        <p>{contributed_by}</p>
                    </Card.Text>
                    <Link to={`/beers/${_id}`}>
                        <Button variant="primary">Ver detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerItem
