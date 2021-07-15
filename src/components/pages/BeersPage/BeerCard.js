import React from 'react'
import { Col, Button, Row, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'


const BeerCard = ({ image_url, name, tagline, _id }) => {
    return (
        <>
            
        <Container className='beer-card'>
            <Row className="justify-content-around">
                <Col xs={2}>
                    <Link to={`/beers/${_id}`}>
                    <img className='card-img' src={image_url} alt=''/>
                    </Link>
                </Col>
                <Col xs={6}>
                    <h4>{name}</h4>
                    <h6>{tagline}</h6>
                    <p><small>Created by: {name}</small></p>
                </Col>
            </Row>
            <hr></hr>
        </Container>
    </>
    )
}

export default BeerCard