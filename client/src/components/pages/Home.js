import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beer from '../../assets/beers.png'
import randombeer from '../../assets/random-beer.png'
import newbeer from '../../assets/new-beer.png'

const Home = () => {
    return (
        <Container className="home">
            <Link to="/beers">
                <img src={beer} alt="Beers"/>
            <h4>All Beers</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Link>
            <Link to="/random-beer">
                <img src={randombeer} alt="Random beer" />
                <h4>Random Beer</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Link>
            <Link to="/new-beer">
                <img src={newbeer} alt="Random beer" />
                <h4>New Beer</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Link>
        </Container>
    )
}

export default Home