import React from 'react';
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RandomBeer = () => {

    return (
        <Container>

<Link to="/">
                <Button variant="dark" size="lg">Homepage</Button>
            </Link>
            <h1>RandomBeer</h1>

            <hr></hr>


        </Container>
    )
}

export default RandomBeer