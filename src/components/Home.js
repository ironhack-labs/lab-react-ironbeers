import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import allBeers from './img/allBeers.png'
import randBeer from './img/randBeer.png'
import addBeer from './img/addBeer.png'






const Home =()=> {
        const liStyle={
            border: 'solid 1px lightgrey ',
            width: '500px'
        }
        const linkStyle ={
            textDecoration: 'none',
            color: 'black',
        }
        const ulStyle={
            listStyle: 'none', 
            padding: '0'
        }

        return (
            <div>
                <ul style={ulStyle}>
                    <li style={liStyle}>
                    <Link to='/allBeers' style={linkStyle}>
                        <img src={allBeers} />
                        <h1>All Beers</h1>
                        <p>asd asd asd asd asd asd asd asd as dasd qwd asd</p>               
                    </Link>
                    </li>
                    <li style={liStyle}>
                    <Link to='/randBeer' style={linkStyle}>
                        <img src={randBeer} />
                        <h1>Random Beer</h1>
                        <p>asd asd asd asd asd asd asd asd as dasd qwd asd</p>               
                    </Link>
                    </li>
                    <li style={liStyle}>
                    <Link to='/addBeer' style={linkStyle}>
                        <img src={addBeer} />
                        <h1>Add Beer</h1>
                        <p>asd asd asd asd asd asd asd asd as dasd qwd asd</p>               
                    </Link>
                    </li>
                </ul>
            </div>
        );
}

export default Home;