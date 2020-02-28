import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap'

const ListCard = ({ image_url, name, tagline, contributed_by }) => {
    return (
        <Col md={3}>
            <Card >
                <Card.Img variant="top" className="list-image" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{tagline} </Card.Text>
                    <Card.Text>Created by: {contributed_by} </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListCard