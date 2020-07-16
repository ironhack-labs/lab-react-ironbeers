import React from 'react'

import './BeersCard.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const BeersCard = ({ image_url,name,tagline,contributed_by }) => {


    return (
        <Col md={4}>
            <Card className="beers-card">
                <Card.Img variant="top" src={image_url}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{tagline}</Card.Title>
                    <Card.Title>{contributed_by}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeersCard