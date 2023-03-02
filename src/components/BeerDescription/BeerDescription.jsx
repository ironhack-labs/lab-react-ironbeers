import React from 'react'
import { Container } from 'react-bootstrap'
import '../BeerDescription/BeerDescription.css'

const BeerDescription = ({ beer }) => {

    const { image_url, name, tagline, description } = beer

    return (
        <Container>
            <img src={image_url} alt="" />
            <h1>{name}</h1>
            <hr />
            <h2>{tagline}</h2>
            <p><b>Description:</b>{description}</p>
        </Container>
    )
}

export default BeerDescription