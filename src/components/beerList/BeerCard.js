import React from 'react';
import { Col, Card } from 'react-bootstrap'
import './BeerCard.css'

import { Link } from 'react-router-dom'

const BeerCard = ({ name, image_url, tagline, contributed_by, _id }) => {

    return (
        <Col md={4}>
            <Card className="beerCard">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{tagline}</Card.Text>
                    <Card.Text><strong>Created by:{contributed_by}</strong></Card.Text>
                    <Link className="btn btn-dark btn-sm btn-block" to={`/beers/${_id}`}>Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}



export default BeerCard 