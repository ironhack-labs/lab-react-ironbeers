import React from 'react'
import { Container } from 'react-bootstrap'
import BeersList from './Beers-list'


// import './Beers.css'

const Beers = () => {

    return (


        <Container className="coasters-page">

            <h1>All the Beers</h1>

            <hr />

            <BeersList />

        </Container>

    )
}

export default Beers