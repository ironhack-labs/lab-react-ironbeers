import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'

export default function Home() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card>
                        <Link to="/beers">
                            <Card.Img variant="top" src={beers} />
                            <Card.Body>
                                <Card.Title>All Beers</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                    <Card >
                        <Link to="/new-beer" >
                            <Card.Img variant="top" src={newBeer} />
                            <Card.Body>
                                <Card.Title>New Beer</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                    <Card>
                        <Link to="/random-beer">
                            <Card.Img variant="top" src={randomBeer} />
                            <Card.Body>
                                <Card.Title>Random Beer</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
