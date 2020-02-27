import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Randombeer = () => {
    return (
        <section>
            <ul>
                <li><Link to="/">Home</Link></li>       
                <h1>Hola estoy en Randombeer</h1>
            </ul>
        </section>
    )
}

export default Randombeer;