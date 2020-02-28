import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap'

const DetailCard = ({ image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by }) => {
    return (
        <Col md={12}>
            <Card >
                <Card.Img variant="top" className="list-image" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{tagline} </Card.Text>
                    <Card.Text>{first_brewed} </Card.Text>
                    <Card.Text>{attenuation_level} </Card.Text>
                    <Card.Text>{description} </Card.Text>
                    <Card.Text>Created by: {contributed_by} </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DetailCard