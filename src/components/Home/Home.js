import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


export default function () {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src="./images/beers.jpeg" alt="beers"/>
                </div>
                <div className="card-text">
                    <Link to={ `/beers` } >
                        <h2>All Beers</h2>
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src="./images/random-beer.jpeg" alt="beer"/>
                </div>
                <div className="card-text">
                    <Link to={ `/random-beer` }  >
                        <h2>Random Beer</h2>
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src="./images/new-beer.jpeg" alt="beer"/>
                </div>
                <div className="card-text">
                    <Link to={ `/new-beer` } >
                        <h2>New Beer</h2>
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            
            
        </>
    )
}
