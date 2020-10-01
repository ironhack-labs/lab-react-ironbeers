import React from 'react'
import { Link } from 'react-router-dom'

// React Bootstrap
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default ({ title, url, image }) => {

    return (

        <Col sm={12} md={4}>
            <Link to={url} className='text-dark'>
                <Card className='mt-3 mb-3 shadow'>
                    <Card.Img variant="top" src={image} alt={title} style={{height: '200px', objectFit: 'cover'}} />
                    <Card.Body>
                        <h3>{ title }</h3>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )

}