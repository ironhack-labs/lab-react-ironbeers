import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


export default () => {

    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark ">
                <Link to="/"> <img src="https://cdn.pixabay.com/photo/2014/04/03/00/41/house-309113_1280.png" style={{ width: '25px' }} alt="house" /> </Link>
            </nav>
        </Fragment>

    )
} 