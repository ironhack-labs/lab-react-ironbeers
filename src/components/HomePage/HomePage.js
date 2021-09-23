import React from 'react'
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import beers from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'
import './HomePage.css'

const HomePage = () => {
    return (
        <Container className="container">
            <Link to='/beers'>
                <img className="image" src={beers} alt="All beers" />
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laborum tempora repellendus reiciendis iure in similique maiores, a placeat nesciunt optio eaque facere, at nam sed? Atque ipsam reiciendis dolorum!</p>
            </Link>
            <Link to='/random-beers'>
                <img className="image" src={randomBeer} alt="Random beer" />
                <h1>Random beer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laborum tempora repellendus reiciendis iure in similique maiores, a placeat nesciunt optio eaque facere, at nam sed? Atque ipsam reiciendis dolorum!</p>
            </Link>
            <Link>
                <img className="image" src={newBeer} alt="New beer" />
                <h1>New beer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laborum tempora repellendus reiciendis iure in similique maiores, a placeat nesciunt optio eaque facere, at nam sed? Atque ipsam reiciendis dolorum!</p>
            </Link>
        </Container>
    )
}

export default HomePage