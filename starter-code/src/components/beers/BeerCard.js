import React from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'



const BeerCard = ({ image_url, name, _id, description, food_pairing, brewers_tips }) => {

    console.log(food_pairing)
    return (
        <Col>
            <Card>
                <Link to={_id}>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>

                            <li>{food_pairing}</li>

                        </Card.Text>
                        <Card.Text>{brewers_tips}</Card.Text>
                    </Card.Body>
                </Link>
                <hr />
            </Card>
        </Col>
    )

}

export default BeerCard