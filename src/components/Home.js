import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';






const Home =()=> {
        return (
            <div>
                <Link to='/allBeers'>
                    <img src="../../public/logo192.png" />
                    <h1>All Beers</h1>
                    <p>asd asd asd asd asd asd asd asd as dasd qwd asd</p>               
                </Link>
                <Link to='/randBeer'>
                    <img src="../../public/logo192.png" />
                    <h1>Random Beer</h1>
                    <p>asd asd asd asd asd asd asd asd as dasd qwd asd</p>               
                </Link>
                <Link to='/addBeer'>
                    <img src="../../public/logo192.png" />
                    <h1>Add Beer</h1>
                    <p>asd asd asd asd asd asd asd asd as dasd qwd asd</p>               
                </Link>
            </div>
        );
}

export default Home;