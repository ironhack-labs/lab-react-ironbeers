import React from 'react'
import { Card, Button, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Beers.css'



const BeerCard = ({ _id, name, description, tagline, first_brewed, attenuation_level, contributed_by, image_url }) => {
    return (
        <>
        <Card className="beer-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {/* <Card.Text>
                    {description}.
                </Card.Text> */}
                <Card.Text>
                    {tagline}.
                </Card.Text>
                {/* <Card.Text>
                    {first_brewed}.
                </Card.Text> */}
                {/* <Card.Text>
                    {attenuation_level}.
                </Card.Text> */}
                <Card.Text>
                    {contributed_by}.
                </Card.Text>

            </Card.Body>
        </Card>
        </>
    )
}

export default BeerCard