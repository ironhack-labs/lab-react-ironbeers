
import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const CardBeer = ({
        image_url,
        name,
        tagline,
        contributed_by,
        _id
    }) => {


    return (
        <Col md={5}>
            <Card className="card-rusa">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{tagline}</p>
                    <p>Gracias a {contributed_by}</p>
                    <hr></hr>
                    <Button as="div" variant="dark" size="sm">
                        <Link to={`beers/${_id}`}>Detalles</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}





export default CardBeer