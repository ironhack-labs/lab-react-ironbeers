import React from 'react'
import './BeerCard.css'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

const BeerCard = ({ name, image_url, _id, tagline, contributed_by}) => {
    return (
        <Col md={4}>
            <Card className="card-rusa">
                <Card.Img variant="top" src={image_url}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <hr></hr>
                    {tagline}
                    <br></br>
                    <br></br>
                    Created by:{contributed_by}
                    <Button as="div" variant="dark" size="sm">
                        <Link to={`/details/${_id}`}>See details</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard