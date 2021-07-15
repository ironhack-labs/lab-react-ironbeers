import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col } from "react-bootstrap"

const HomeSection = ({ title, img, description, linkTo }) => {
    return (
        <Link className="nav-link" to={linkTo}>
            <Container className="mt-1">
                <Row className="justify-content-center">
                    <Col md={8}>
                        < Card >
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                            </Card.Body>
                        </Card >
                    </Col >
                </Row>
            </Container>
        </Link>

    )
}

export default HomeSection



