
import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default (props ) => {
console.log(props)
    return (
        <Col md={4}>
            <Card className="beer-card">
                <Card.Img variant="top" src={props.image_url} />
                <Card.Body>
                    <h4>{props.name}</h4>
                    <Link to={`/allbeers/details/${props._id}`}>
                        <Button variant="dark" size="sm" block>Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}