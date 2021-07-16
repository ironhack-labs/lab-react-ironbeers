import React from 'react';
import './Home.css';
import allBeers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container" >
            <Link to="/beers" className="link">
                <div className="row">
                    <div className="card">
                        <img className="card-img-top" src={allBeers} alt="beers image" />
                        <div className="card-body">
                            <h5 className="card-title">All Beers</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/random-beer" className="link">
                <div className="row">
                    <div className="card">
                        <img className="card-img-top" src={randomBeer} alt="random image" />
                        <div className="card-body">
                            <h5 className="card-title">Random Beer</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/new-beer" className="link">
                <div className="row">
                    <div className="card">
                        <img className="card-img-top" src={newBeer} alt="new image" />
                        <div className="card-body">
                            <h5 className="card-title">New Beer</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}


export default Home;