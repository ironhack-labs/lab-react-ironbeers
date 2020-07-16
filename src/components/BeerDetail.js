import React from 'react'
// import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
const BeerDetail = ({ image_url, name, tagline, contributed_by }) => {

    return (

        <Col md={4}>
            <Card className="Beers-card">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{tagline}</Card.Title>
                    <Card.Title>{contributed_by}</Card.Title>
                    {/* <Link to={`/coasters/${_id}`} className="btn btn-dark btn-block btn-sm">Ver detalles</Link> */}
                </Card.Body>
            </Card>
        </Col>
    )
}
export default BeerDetail