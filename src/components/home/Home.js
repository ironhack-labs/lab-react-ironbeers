import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import beers from '../../assets/beers.png';
import newBeer from '../../assets/new-beer.png';
import randomBeer from '../../assets/random-beer.png';


export default function Home(props) {


    return (
        <>
            <div className="home-page">
                <img src={beers} alt='icon' />
                <Link to='/beers'>
                    <h1> All Beers </h1>
                </Link>
                <p>un texto
                </p>
                <br />
                <img src={randomBeer} alt='icon' />
                <Link to='/beers/random'>
                    <h1> Random Beer </h1>
                </Link>
                <p>un texto
                </p>
                <br />
                <img src={newBeer} alt='icon' />
                <Link to='/newbeer'>
                    <h1> New Beer </h1>
                </Link>
                <p>un texto
                </p>
                <br />
            </div>
        </>
    )
}