import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const header = () => {

    return (
        <div className='header'>
            <Link to='/'><img className='home-image' src='./home-icon.png' /></Link>
        </div>
    )

}

export default header;
