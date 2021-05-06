import { Container } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import beers from './../../assets/beers.png';
import random from './../../assets/random-beer.png';
import newBeer from './../../assets/new-beer.png';


const Home = () => {
    return (
       <Container>
           <Link to='/beers'>
           <img src={beers} alt='Beers'/>
           <h2>All Beers</h2>
           </Link>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            

            <Link to='/randomBeer'>
           <img src={random} alt='Random Beer'/>
           <h2>Random Beer</h2>
           </Link>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            

            <Link to='/new'>
           <img src={newBeer} alt='New Beer'/>
           <h2>New Beer</h2>
           </Link>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            

       </Container> 
    )
}

export default Home