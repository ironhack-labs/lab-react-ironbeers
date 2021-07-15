import React from 'react';
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <Container>
            <h1>ESTA ES LA HOMEPAGE</h1>

            <hr></hr>

            <Link to="/beers">
                <Button variant="dark" size="lg">Beers</Button>
            </Link>
            <Link to="/random-beer">
                <Button variant="dark" size="lg">random-beer</Button>
            </Link>
            <Link to="/new-beer">
                <Button variant="dark" size="lg">new-beer</Button>
            </Link>

        </Container>
    )
}

export default HomePage