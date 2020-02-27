import React from 'react'
import './BeersCard.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'


const BeersCard = ({ name, image_url, tagline, contributed_by, _id }) => {
    return (
        <>
            <Link to={`/beers/${_id}`}>
                <Col md={4}>
                    <Card className="card-beer">
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <hr></hr>
                            <Card.Text>{tagline}</Card.Text>
                            <Card.Text>{contributed_by}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Link>
        </>
    )
}

export default BeersCard