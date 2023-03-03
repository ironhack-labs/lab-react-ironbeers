import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beersImg from './../../../assets/beers.png'
import newBeerImg from './../../../assets/new-beer.png'
import randomBeerImg from './../../../assets/random-beer.png'


const HomePage = () => {
    return (
        <Container className="Home">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h1>IronBeers App</h1>
                    <hr />
                    <p>Las mejores cervezas</p>
                    <Link to="/beers">
                        <Button variant="dark">
                            All Beers
                            <img src={beersImg} alt="Beers" />
                        </Button>
                    </Link>
                    <Link to="/random-beer">
                        <Button variant="dark">
                            Random Beers
                            <img src={randomBeerImg} alt="Beers" />
                        </Button>
                    </Link>
                    <Link to="/new-beer">
                        <Button variant="dark">
                            New Beer
                            <img src={newBeerImg} alt="New Beer" />
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;