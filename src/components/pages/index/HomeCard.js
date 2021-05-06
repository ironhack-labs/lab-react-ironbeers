import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomeCard.css'

const HomeCard = ({ imageUrl, title, description, link }) => {

    return (
        <Col md={4}>
            <Card className="home-card">
                <Card.Img src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/${link}`} className="btn btn-dark btn-sm" style={{ width: '100%' }}>See more</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default HomeCard