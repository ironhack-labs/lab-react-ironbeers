import React from 'react';
import firstImg from '../../../assets/beers.png'
import secondImg from '../../../assets/random-beer.png'
import thirdImg from '../../../assets/new-beer.png'

import { Container, Row, Col, Card } from 'react-bootstrap'

import BeersService from '../../../service/beers-service'

import { Link } from 'react-router-dom'
import './home.css'

const HomePage = () => {

    return(
        <Container>
            <Row>
                <Col lg={6} className="beer-card" >
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={firstImg} />
                        <Card.Body>
                            <Link to='/beers-list'>All Beers</Link>
                            <p>So join me for a drink boys / We're gonna make a big noise / So don't worry 'bout tomorrow / Take it today / Forget about the check we'll get hell to pay / Have a drink on me / Yeah have a drink on me</p>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={secondImg} />
                        <Card.Body>
                            <Link to={'/random'}>Random Beer</Link>
                            <p>So join me for a drink boys / We're gonna make a big noise / So don't worry 'bout tomorrow / Take it today / Forget about the check we'll get hell to pay / Have a drink on me / Yeah have a drink on me</p>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={thirdImg} />
                        <Card.Body>
                            <Link to='/new'>New Beer</Link>
                            <p>So join me for a drink boys / We're gonna make a big noise / So don't worry 'bout tomorrow / Take it today / Forget about the check we'll get hell to pay / Have a drink on me / Yeah have a drink on me</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default HomePage