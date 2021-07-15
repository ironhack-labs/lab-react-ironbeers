import React from 'react';
import Header from './Header'
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col } from "react-bootstrap"
import "./BeerDetails.css"

const BeerDetails = ({ image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by }) => {
    return (
        <>
            <Container className="mt-1">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Header />
                        <Card>
                            <Card.Img className="beerDetailsImage" variant="top" src={image_url} />
                            <Card.Body>
                                <Card.Title>{name} | {attenuation_level}</Card.Title>
                                <Card.Subtitle>{tagline} | {first_brewed}</Card.Subtitle>
                                <Card.Text>{description}</Card.Text>
                                <Card.Text className="text-muted">{contributed_by}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col >
                </Row>
            </Container>
        </>

    )
}

export default BeerDetails