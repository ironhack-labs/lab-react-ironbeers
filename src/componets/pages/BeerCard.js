import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import React from 'react'

const BeerCard = (props) => {

    console.log(props)
    return (



        < Col md={4} >

            <Card className="coaster-card">
                <Card.Img variant="top" src={props.image_url} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>

                </Card.Body>
            </Card>

        </Col >
    )
}

export default BeerCard