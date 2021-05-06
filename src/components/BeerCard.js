import React from 'react';
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './BeerCard.css'

const BeerCard = ({image, name, tagline, contributed_by, _id}) => {
    return(
        <Col md={4}>
            <Card className="beerCard">
                <img src={image} alt='imagen' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{tagline}</Card.Text>
                    <Card.Text>{contributed_by}</Card.Text>
                     <Link to={`/${_id}`} >Detalles</Link>
                </Card.Body>    
            </Card>
        </Col>
    )

}
export default BeerCard


