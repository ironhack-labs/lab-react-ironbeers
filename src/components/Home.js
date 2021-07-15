import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import allBeers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import './home.css'



const Home = () => {


    return (

        <Row style={{ justifyContent: "center" }}>
            <Col md={12} className="text-center">
                <Link to={`/beers/all`}>
                    <img src={allBeers} alt='All Beers' />
                    <h3>All Beers</h3>
                </Link>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col md={12} className="text-center">
                <Link to={'/beers/random'}>
                    <img src={randomBeer} alt='random beer' />
                    <h3>Random Beer</h3>
                </Link>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>

            <Col md={12} className="text-center">
                <Link to={'/beers/new'}>
                    <img src={newBeer} alt='new Beer' />
                    <h3>Create beer</h3>
                </Link>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
        </Row>


    )

}

export default Home;