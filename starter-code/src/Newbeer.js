import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Newbeer = () => {
    return (
        <section>
                <h1><Link to="/">Home</Link></h1>       
                <h2>Hola estoy en New Beer</h2>
        </section>
    )
}

export default Newbeer;