import React from 'react'
import { Col, Row } from 'react-bootstrap'


const BeerInfo = ({ image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by }) => {

    return (
        <Col md={10}>
            <img src={image_url}></img>
            <Row>
                <Col md={6}>
                    <h2>{name}</h2>
                </Col>
                <Col md={6}>
                    <h2>{attenuation_level}</h2>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <p>{tagline}</p>
                </Col>
                <Col md={6}>
                    <p>{first_brewed}</p>
                </Col>
            </Row>
            <p>{description}</p>
            <p>{contributed_by}</p>
        </Col>
    )
}

export default BeerInfo