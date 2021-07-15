import React from 'react';
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewBeer = () => {

    return (
        <Container>

            <Link to="/">
                <Button variant="dark" size="lg">Homepage</Button>
            </Link>
            <h1>NewBeer</h1>

            <hr></hr>
        </Container>
    )
}

export default NewBeer