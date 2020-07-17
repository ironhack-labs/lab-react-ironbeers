import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import './home.css'


    const Homepage = () => {

   
        return (
            <>
                <Container as="main" className="homepage">
                    <Row>
                        {/* TODO LAS CARDS EN COMPONENT TB?? */}
                     
                        <Col md={12}>
                            <Card>
                                <Card.Img variant="top" src="../../../allbeer.jpg" />
                                <Card.Body>
                                    <Card.Title><Link to='/beers'>All Beers</Link></Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                       

                        <Col md={12}>
                            <Card>
                                <Card.Img variant="top" src="../../../onebeer.jpg" />
                                <Card.Body>
                                    <Card.Title><Link to='/random'>Random Beer</Link></Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={12}>
                            <Card>
                                <Card.Img variant="top" src="../../../newbeer.jpg" />
                                <Card.Body>
                                    <Card.Title><Link to='/new'>New Beer</Link></Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </>
        )
    }


export default Homepage