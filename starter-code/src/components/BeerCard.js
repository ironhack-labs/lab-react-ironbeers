import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (
        <>
            <Col md={4}>
                <Link to={`/beers/${_id}`}>
                    <Card className="card-beer">
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{tagline}</Card.Text>
                            <Card.Text>Create by: {contributed_by}</Card.Text>
                            <hr></hr>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    )
}

export default BeerCard