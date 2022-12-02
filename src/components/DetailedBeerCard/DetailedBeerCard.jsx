import { useState } from "react"
import { Col, Row, Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


const DetailedBeerCard = ({ beer }) => {


    const { image_url, name, tagline, contributed_by, _id, attenuation_level, first_brewed, description } = beer

    return (

        <>
            <h1>{name} details</h1>
            <hr className="mb-4" />
            <Card className="BeerCard d-flex  align-items-center">
                <Card.Img variant="top" src={image_url} className='p-3' />
                <Card.Body>
                    <Card.Title as={'div'}><strong>{name}</strong></Card.Title>
                    <Card.Text>
                        {tagline}
                    </Card.Text>
                    <Card.Text>
                        {attenuation_level}
                    </Card.Text>
                    <Card.Text>
                        {first_brewed}
                    </Card.Text>
                    <Card.Text>
                        <strong>Description:</strong> {description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Created by:</strong> {contributed_by}
                    </Card.Text>
                    <Link to={`/beers`}>
                        <Button variant="outline-info" className="me-2">Back to list</Button>
                    </Link>
                    <Link to={`/`}>
                        <Button variant="outline-info">Back to init</Button>
                    </Link>

                </Card.Body>
            </Card></>


    )
}

export default DetailedBeerCard