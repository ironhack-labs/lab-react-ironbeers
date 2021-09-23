import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function BeerItem(props) {

    const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by, random, allBeers, _id } = props

    return ( 

            <Card className="d-flex align-items-center p-2 mb-2" style={{ width: '18rem', height:'100%'}}>
                <Card.Img style={{ width: '50px' }} variant="top" src={image_url} />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{tagline}</Card.Text>
                    {random &&
                        <>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>First Brewed: {first_brewed}</Card.Text>
                        <Card.Text>Attenuation: {attenuation_level}</Card.Text>
                        </>
                    }
                    {
                        allBeers &&
                        <Link to={`/beer/${_id}`}><Button className="mb-3">Check Details</Button></Link>

                    }
                    <Card.Footer><small>{contributed_by}</small></Card.Footer>
                </Card.Body>
            </Card>
        
     );
}

export default BeerItem;