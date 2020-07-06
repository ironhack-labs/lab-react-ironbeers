import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Img from './img/homeImg.png'



const HomeLink =()=> {
    
    // STYLES==========================================
    const divStyle = {
        textAlign: 'center',
        width: '100%',
        height: '85px',
        backgroundColor: 'rgb(38, 176, 228)',
        color: 'white'
    };

    const linkStyle ={
        // marginLeft:'45vw',
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