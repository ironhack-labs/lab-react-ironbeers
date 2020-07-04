import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home'
import AllBeers from './AllBeers'
import RandBeer from './RandBeer'
import AddBeer from './AddBeer'


const HomeLink =()=> {
    const divStyle = {
        width: '100%',
        height: '75px',
        textAlign: 'center',
        backgroundColor: 'rgb(18, 126, 228)',
        color: 'white'
    };

    const imgStyle ={
        width: '104px',
    }


    return (
        <div style={divStyle}>
            <Link to='/'><img src='../../public/logo192.png' style={imgStyle} /></Link>
        </div>
    );
}

export default HomeLink;