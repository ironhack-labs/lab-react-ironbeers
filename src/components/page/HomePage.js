import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap'

const HomePage = () => 

{
  return (
    <div>
    <Container>
        <Card >
            <Card.Img variant="top" src="./assets/beers.png"/>
            <Card.Body>
                <Card.Title>AllBeers</Card.Title>
                <Card.Text>
                Mira nuestras cervezas
                </Card.Text>
                <Link to="/beers"><Button variant="primary">AllBeers</Button></Link>
            </Card.Body>
        </Card>
        <Card >
            <Card.Img variant="top" src="./assets/random-beer.png" />
            <Card.Body>
                <Card.Title>Random Beers</Card.Title>
                <Card.Text>
                Elige una cerveza random
                </Card.Text>
                <Link to="/random-beers"><Button variant="primary">Random Beers</Button></Link>
            </Card.Body>
        </Card>
        <Card >
            <Card.Img variant="top" src="./assets/new-beer.png" />
            <Card.Body>
                <Card.Title>New Beer</Card.Title>
                <Card.Text>
                Nueva cervecita
                </Card.Text>
                <Link to="/new-beer"><Button variant="primary">New Beer</Button></Link>
            </Card.Body>
        </Card>
    </Container>
    
    </div>
  )
}

export default HomePage