
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react';

const IndexPage = () => {

    return (
        <Container>
            <h1>Bievenid@ a Beers App!</h1>
            <hr></hr>

            <Link to="/beers">
                <Button variant="success" size="md">Ver todas las cervezas</Button>
            </Link>

            <Link to="/random-beer">
                <Button variant="success" size="md">Mostrar cerveza aleatoriamente</Button>
            </Link>
            <Link to="/new-beer">
                <Button variant="success" size="md">Crea una cerveza</Button>
            </Link>

        </Container>
    )
}

export default IndexPage