import React from 'react';
//import Navbar from './navbar/Navbar';
import { Link } from "react-router-dom";
import '../App.css';

function Homepage() {


    return (
        <div>
            <div>
            <img src='/images/beers.png' alt='cervezas'></img>
            <h3>Lorem ipsum</h3>
            <Link to="/beers">Accede a las cervezas!</Link>
                
        </div>
        <div>
            <img src='/images/random-beer.png' alt="more cervezas"></img>
            <h3>Lorem ipsum</h3>
            <Link to="/randombeer">Accede a una cerveza aleatoria!</Link>
        </div>
        <div>
            <img src='/images/new-beer.png' alt='crea tu cerveza'></img>
            <h3>Lorem ipsum</h3>
            <Link to="/new-beer">Crea tu cerveza!</Link>
        </div>
      
      </div>
    )
}

export default Homepage
