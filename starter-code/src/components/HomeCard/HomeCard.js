import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap'

const HomeCard = ({ title, imageUrl, text }) => {
    return (
        <Col>
            <Card >
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text} </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default HomeCard