import React from 'react';
import { Card, Col } from 'react-bootstrap'


import { Link } from 'react-router-dom'

const Beercard = ({ name, image_url, _id }) => {

    return (
        <Col md={4} style={{ height: '400px', marginBottom: 20 }}>
            <Card>
                <Card.Img variant="top" src={image_url} style={{ width: '50%', height: '200px', marginBottom: 20 }} />
                <Card.Body>
                    <h3>{name}</h3>
                    <Link to={`/${_id}`} className="btn btn-dark btn-sm btn-block">Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Beercard