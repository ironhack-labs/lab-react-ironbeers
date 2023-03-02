import beerService from "../../services/beers.services"

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {


    return (
        <>
            <Container className='mt-4'>
                <h1>Beers party!🍻🎉</h1>


                <Row>
                    <Col md={{ span: 4 }}>

                        <Link to='/beers'>
                            <Card >
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                                <Card.Body>
                                    <Card.Title>All beers</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>

                    </Col>
                    <Col md={{ span: 4 }}>

                        <Link to='/random'>
                            <Card >
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1513309914637-65c20a5962e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                                <Card.Body>
                                    <Card.Title>Random Beer</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>

                    </Col>
                    <Col md={{ span: 4 }}>

                        <Link to='/new'>
                            <Card >
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                                <Card.Body>
                                    <Card.Title>New Beer</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage
