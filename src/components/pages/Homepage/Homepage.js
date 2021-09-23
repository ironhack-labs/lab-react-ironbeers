import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <Container style={{ minHeight: "100vh" }}>
     <h1>IronBeers</h1>
     <Link to="/all-beers">
        <Button>All Beers</Button>
      </Link><br /><br />
      <Link to="/random-beer">
        <Button>Random Beer</Button>
      </Link><br /><br />
      <Link to="/new-beer">
        <Button>New Beer</Button>
      </Link>

    </Container>
  )
}