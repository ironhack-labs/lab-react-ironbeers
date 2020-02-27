import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./home.css"



const Home = () => {
    return (
        <nav>
            <h1>Estoy en Home</h1>
            <ul>
                <li><Link to="/allbeers">All Beers</Link></li>       
                <li><Link to="/randombeer">Random beer</Link></li>
                <li><Link to="/newbeer">New Beer</Link></li>
            </ul>
        </nav>
    )
}

export default Home;

