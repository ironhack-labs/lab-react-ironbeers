import React from 'react'
import BeerService from '../services/beerServices'
import { useState, useEffect } from 'react'
import { Container, Button, Row } from "react-bootstrap"
import {  Link } from 'react-router-dom'
import './Random-beers.css'

function Randombeers() {
  const [Random, setRandom] = useState({})

  useEffect(() => {
    BeerService
      .getOneRandomBeer()
      .then(({ data }) => setRandom(data))
      .catch((err) => console.log(err))
  }, [])

  return (

    <>
      <header className='header'>
        <Link to="/">
          <img src="/assets/images.png" />
        </Link>
      </header>
      <Container >
        <Row className='Birra'>
          <img src={Random.image_url} alt="beer imagen" />
          <h3>{Random.name}</h3>
          <hr></hr>
          <h4>{Random.tagline}</h4>
          <hr></hr>
          <h4>{Random.abv}</h4>
          <hr></hr>
          <p>{Random.description}</p>
          <hr></hr>
          <Link to="/BeerList"> <Button variant="warning">Back</Button></Link>
        </Row>
      </Container>
      </>
  )
}
export default Randombeers