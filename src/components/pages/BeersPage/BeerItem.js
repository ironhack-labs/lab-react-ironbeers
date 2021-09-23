import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './BeerItem.css'

const BeerItem = ({ image_url, name, tagline, _id, contributed_by }) => {
  return (
    <Col md={4} className="mb-3 beer">
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h5>{tagline}</h5>
            <p><b>Created by: </b>{contributed_by}</p>
          </Card.Text>
          <Link to={`/beers/${_id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}


export default BeerItem;