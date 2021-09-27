import React from 'react'
import beers from '../assets/beers.png'
import randomBeers from '../assets/random-beer.png'
import newBeers from '../assets/new-beer.png'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'


export default function Home() {
    return (
        <Container className='homeContainer'>
            <Link to='/beers' style={{ textDecoration: 'none', color: 'black' }}>
                <img src={beers} alt='beers'></img>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </Link>
            <br />
            <Link to='/beers/random' style={{ textDecoration: 'none', color: 'black' }}>
                <img src={randomBeers} alt='beers'></img>
                <h1>Random beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </Link>
            <br />
            <Link to='/new-beers' style={{ textDecoration: 'none', color: 'black' }}>
                <img src={newBeers} alt='beers'></img>
                <h1>New beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </Link>
        </Container>

    );
};
