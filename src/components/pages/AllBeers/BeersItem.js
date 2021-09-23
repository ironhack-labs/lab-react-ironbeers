import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BeersItem({ _id, name, image_url, tagline, contributed_by }) {
  return (
    <Col md={4} className="mb-3">
      <Card className="d-flex justify-content-center flex-row">
        <Card.Img variant="top" src={image_url} className="beer-image"/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
            <div><h6>{tagline}</h6></div>
            <p>{contributed_by}</p>
          <Link to={`/${_id}`}>
           <Button variant="primary">Read more</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}