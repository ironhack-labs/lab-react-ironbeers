import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const BeerCard = ({ name,image_url,tagline,constributed_by,_id  }) => {

    return (
    <>
         <Col md={4}>
            <Card className="beer-card">
                <Card.Img variant="top" src={image_url} style={{width: 100}} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                   <p>{tagline}</p>
                   <p>{constributed_by}</p>
                   <Link to={`/${_id}`} className="btn btn-dark btn-block btn-sm">Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    </>
    )
}

export default BeerCard



