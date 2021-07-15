import NavBar from './NavBar'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

function IndexPage() {
    return (
        <>
            <NavBar />

            <Container>

                <Row>

                    <Col>
                        <h1>Home</h1>
                        <img src={beers} />
                        <Link to="/beers">
                            <h2>All Beers</h2>
                        </Link>
                        <p>At cum soleat disputationi, quo veri admodum vituperata ad. Ea vix ceteros complectitur, vel cu nihil nullam. Nam placerat oporteat molestiae ei, an putant albucius qui.</p>
                    </Col>

                    <Col>
                        <img src={newBeer} />
                        <Link to="/random-beer">
                            <h2>Random beer</h2>
                        </Link>
                        <p>At cum soleat disputationi, quo veri admodum vituperata ad. Ea vix ceteros complectitur, vel cu nihil nullam. Nam placerat oporteat molestiae ei, an putant albucius qui.</p>
                    </Col>

                    <Col>
                        <img src={randomBeer} />
                        <Link to="/new-beer">
                            <h2>New beer</h2>
                        </Link>
                        <p>At cum soleat disputationi, quo veri admodum vituperata ad. Ea vix ceteros complectitur, vel cu nihil nullam. Nam placerat oporteat molestiae ei, an putant albucius qui.</p>
                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default IndexPage