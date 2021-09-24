import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import allBeers from '../../../assets/beers.png'
import newBeers from '../../../assets/new-beer.png'
import randomBeer from '../../../assets/random-beer.png'
import './HomePage.css'



export default function HomePage() {
    return (
        <center>
            <Container>
                <Row>
                    <Link to="/beers">
                        <img src={allBeers} alt="All beers" />
                        <h1>All Beers</h1>
                    </Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quae,
                        et amet deserunt nemo fugit tempore facilis rem reiciendis consequuntur sint maxime eaque
                        aliquid saepe dolore commodi perferendis soluta ut cum.</p>
                </Row>
                <Row>
                    <Link to="/new-beer">
                        <img src={newBeers} alt="New Beer" />
                        <h1>New Beer</h1>
                    </Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quae,
                        et amet deserunt nemo fugit tempore facilis rem reiciendis consequuntur sint maxime eaque
                        aliquid saepe dolore commodi perferendis soluta ut cum.</p>
                </Row>
                <Row>
                    <Link to="/random-beer">
                        <img src={randomBeer} alt="Random Beer" />
                        <h1>Random Beer</h1>
                    </Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quae,
                        et amet deserunt nemo fugit tempore facilis rem reiciendis consequuntur sint maxime eaque
                        aliquid saepe dolore commodi perferendis soluta ut cum.</p>
                </Row>
            </Container>
        </center>
    )
}
