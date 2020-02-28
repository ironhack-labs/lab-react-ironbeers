import React from 'react'
import './card.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



const CardBeers = props => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>

                <Button variant="primary"></Button>
            </Card.Body>
        </Card>
    )
}

export default CardBeers
//     <h4>{props.title}</h4>


