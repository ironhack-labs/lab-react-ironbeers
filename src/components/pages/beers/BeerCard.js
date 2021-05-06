import './BeerCard.css'
import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeerCard = ({image_url, name, tagline, contributed_by, _id}) => {
    return (
        <Col md={4}>
            <Card className="beer-card">
            <img src={image_url} alt={name}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {tagline}
                </Card.Text>
                <Card.Text> <b>Created by: </b>
                 {contributed_by}
                </Card.Text>
                <Link to={`/${_id}`} className="btn btn-dark btn-sm">Details</Link>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard