import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CoastersPage.css'

const BeerCard = ({ _id, title, description, inversions, length, imageUrl }) => {
  return (
    <Card className="coaster-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}.
        </Card.Text>

        <Link to={`/coaster/${_id}`}>
          <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default BeerCard