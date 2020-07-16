import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


const BeerCard = ({ _id, image_url, name, tagline, contributed_by }) => {

    return (

        <Col md={4}>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} style={{ width: "50px", height: "150px" }} alt={name} />
                    <Link to={`/${_id}`}><Card.Title>{name}</Card.Title></Link>
                    <p>{tagline}</p>
                    <p>{contributed_by}</p>
                </Card.Body>

            </Card>
        </Col>
    )
}

export default BeerCard