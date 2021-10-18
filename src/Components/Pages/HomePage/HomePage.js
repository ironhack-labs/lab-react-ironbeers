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
            <Container fluid>
                <Row>
                    <Link exact to="/beers" className='home-link'>
                        <img src={allBeers} alt="All beers" className='img' />
                        <h2 className='home-title'>All Beers</h2>
                    </Link>
                    <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quae,
                        et amet deserunt nemo fugit tempore facilis rem reiciendis consequuntur sint maxime eaque
                        aliquid saepe dolore commodi perferendis soluta ut cum.</p>
                </Row>
                <Row>
                    <Link exact to="/new-beer" className='home-link'>
                        <img src={newBeers} alt="New Beer" className='img' />
                        <h2 className='home-title'>New Beer</h2>
                    </Link>
                    <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quae,
                        et amet deserunt nemo fugit tempore facilis rem reiciendis consequuntur sint maxime eaque
                        aliquid saepe dolore commodi perferendis soluta ut cum.</p>
                </Row>
                <Row>
                    <Link exact to="/random-beer" className='home-link'>
                        <img src={randomBeer} alt="Random Beer" className='img' />
                        <h2 className='home-title'>Random Beer</h2>
                    </Link>
                    <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quae,
                        et amet deserunt nemo fugit tempore facilis rem reiciendis consequuntur sint maxime eaque
                        aliquid saepe dolore commodi perferendis soluta ut cum.</p>
                </Row>
            </Container>
        </center>
    )
}
