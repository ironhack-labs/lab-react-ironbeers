import React from 'react'
import beers from './../../../assets/beers.png'
import newBeer from './../../../assets/new-beer.png'
import randomBeer from './../../../assets/random-beer.png'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IndexPage = () => {

    return (
        <>
            <img className='home-img' src={beers}></img>
            <Container>
                <Link className='link-litle' to="/beers" alt=''>All Beers</Link>
                <p className='home-p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Container>
            <img className='home-img' src={newBeer}></img>
            <Container>
                <Link className='link-litle' to="/random-beer" alt=''>Random Beer</Link>
                <p className='home-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Container>
            <img className='home-img' src={randomBeer}></img>
            <Container>
                <Link className='link-litle' to="/new-beer" alt=''>New Beer</Link>
                <p className='home-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Container>
        </>
    )
}

export default IndexPage