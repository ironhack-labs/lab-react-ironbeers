import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={4}>
                        <Link to="/beers">
                            <Card className="home">
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1474314005122-3c07c4df1224?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                                <Card.Body>
                                    <Card.Title>All Beers</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Link to="/random-beer">
                            <Card className="home">
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1549014481-7ae2f1f7eb4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                                <Card.Body>
                                    <Card.Title>Random Beers</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Link to="/new-beer">
                            <Card className="home">
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1528806461183-105a1e845da3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                                <Card.Body>
                                    <Card.Title>New Beer</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;