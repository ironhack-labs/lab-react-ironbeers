import { useEffect, useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import beerImg from '../../assets/beers.png'
import randomBeerImg from '../../assets/random-beer.png'
import newBeerImg from '../../assets/new-beer.png'
import './HomePage.css'

const HomePage = () => {


    return (
        <section className="HomePage">
            <h1>Home Page</h1>
            <hr />
            <Row className="d-flex justify-content-center text-center">
                <Col className="mb-3" sm={{ span: 12 }}>
                    <img src={beerImg} alt="beers image" />
                </Col>
                <Col>
                    <Link className="link" to="/beers">
                        <Button variant='outline-dark' className="d-grid gap-2 col-6 mx-auto mb-3" as="div">Our Beers</Button>
                    </Link>
                </Col>

                <Col className="mb-3" sm={{ span: 12 }}>
                    <img src={randomBeerImg} alt="beers image" />
                </Col>
                <Col>
                    <Link className="link" to="/random">
                        <Button variant='outline-dark' className="d-grid gap-2 col-6 mx-auto mb-3" as="div">RandomBeer!</Button>
                    </Link>
                </Col>

                <Col className="mb-3" sm={{ span: 12 }}>
                    <img src={newBeerImg} alt="beers image" />
                </Col>
                <Col>
                    <Link className="link" to="/new">
                        <Button variant='outline-dark' className="d-grid gap-2 col-6 mx-auto mb-3" as="div">Create a New Beer</Button>
                    </Link>
                </Col>
            </Row>
        </section>
    )


}

export default HomePage