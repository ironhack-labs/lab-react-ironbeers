import React from 'react'
import Header from '../../layout/Header/Header'
import { Container } from 'react-bootstrap'

export default function BeerRandom() {
    return (
        <Container>
            <Header/>
            <img src='' alt='s'></img>
            <h2>name</h2>
            <p>Tagline</p>
            <p>first_brewed</p>
            <p>attenuation_level</p>
            <p>description</p>
            <p>contributed By</p>

        </Container>
    )
}
