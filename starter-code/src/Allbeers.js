import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Beerlist from "./Beerlist";


const Allbeers = () => {
    return (
        <section>
           
                <h2><Link to="/">Home</Link></h2>       
                <h1>Hola estoy en Allbeers</h1>
                <Beerlist></Beerlist>

        </section>
    )
}

export default Allbeers;
