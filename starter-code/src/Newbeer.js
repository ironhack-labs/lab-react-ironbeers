import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Newbeer = () => {
    return (
        <section>
            <ul>
                <li><Link to="/">Home</Link></li>       
                <h1>Hola estoy en Newbeer</h1>
            </ul>
        </section>
    )
}

export default Newbeer;