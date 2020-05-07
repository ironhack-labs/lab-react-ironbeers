import React from 'react'
import { Link } from 'react-router-dom'

import './beerCard.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const BeerCard = ({ name, image, tagline, contributedBy }) => {
  return (
    <Container as="article">
      <Row>
        <Col className="is-flex" xs={4}>
          <img src={image} alt={name} />
        </Col>
        <Col xs={8}>
          <h4>{name}</h4>
          <hr/>
          <p>{tagline}</p>
          <small>{contributedBy}</small>
        </Col>
      </Row>
      <hr/>
    </Container>
  )
}

export default BeerCard
