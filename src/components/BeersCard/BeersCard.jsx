import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../BeersCard/BeersCard.css'

function BeersCard({ beer }) {

    const { image_url, name, tagline, _id } = beer

    return (
        <Link to={`/beers/${_id}`} className='BeersCard'>
            <Card className='my-4'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text >{tagline} </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default BeersCard