import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home'
import AllBeers from './AllBeers'
import RandBeer from './RandBeer'
import AddBeer from './AddBeer'
import Img from './homeImg.png'


const HomeLink =()=> {

    // STYLES==========================================
    const divStyle = {
        width: '100%',
        height: '85px',
        // textAlign: 'center',
        backgroundColor: 'rgb(38, 176, 228)',
        color: 'white'
    };

    const linkStyle ={
        marginLeft:'45vw',
        width: '74px',
        padding: '10px 60px',
        backgoundImage: `url(${Img})`
    }
    // ==========================================================

    return (
        <div style={divStyle}>
            <Link to='/'><img src={Img} style={linkStyle}/></Link>
        </div>
    );
}

export default HomeLink;