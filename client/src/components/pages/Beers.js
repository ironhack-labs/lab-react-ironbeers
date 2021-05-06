import { Container } from 'react-bootstrap'
import React from 'react'
import BeersList from './ListBeers'
import Header from '../layout/Header'

import './Beers.css'

const Beers = () => {

    return (


        <Container className="beers-page">

            <Header />

            <BeersList />

        </Container>

    )
}

export default Beers