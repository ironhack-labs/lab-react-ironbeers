import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/col'

const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    
    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span>{tagline}</span>
                        <hr></hr>
                        <small>{contributed_by}</small>


                    </Card.Text>
                    <Link to={`/beers/${_id}`} className="btn btn-dark btn-block btn-sm">Ver detalles</Link>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard