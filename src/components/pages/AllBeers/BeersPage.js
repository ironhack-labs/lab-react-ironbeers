import React from 'react'
import { Container } from 'react-bootstrap'
import BeersList from './BeersList'

export default function BeersPage() {
  return (
    <Container>
      <h1>All Beers</h1>

      <BeersList/>
    </Container>
  )
}