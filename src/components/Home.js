import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import beersImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/random-beer.png';

class Home extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '45rem' }}>
                    <Link to='/beers' style={{textDecoration: 'none'}}>
                        <img src={beersImg} alt="Beer bar"></img>
                        <h2 style={{color: 'black'}}>All Beers</h2>
                        <p style={{color: 'grey'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </Link>
                </Card>
                <Card style={{ width: '45rem' }}>
                    <Link to='/random-beer' style={{textDecoration: 'none'}}>
                        <img src={randomBeerImg} alt="Beer bar tap"></img>
                        <h2 style={{color: 'black'}}>Random Beers</h2>
                        <p style={{color: 'grey'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </Link>
                </Card>
                <Card style={{ width: '45rem' }}>
                    <Link to='/new-beer' style={{textDecoration: 'none'}}>
                        <img src={newBeerImg} alt="Beer bar tap"></img>
                        <h2 style={{color: 'black'}}>New Beer</h2>
                        <p style={{color: 'grey'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </Link>
                </Card>
            </>
        )
    }
}

export default Home