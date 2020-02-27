import React from 'react'

// import './BeerCard.css'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import {Link} from 'react-router-dom'

const BeerCard = (props) => {
    return (
        <Col md={4}>
            <Card className="card-beer">
                <Card.Img variant="top" src={props.image_url} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <hr/>
                    <Button as="div" variant="dark" size="sm">
                        <Link to={`/${props._id}`}>Detalles</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard