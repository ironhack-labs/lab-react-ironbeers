import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import home from '../../../assets/home.png'
import './Navigation.css'


const Navigation = () => {
    return (
        <Navbar className="navbar">
            <Link exact to='/'><img className="logo" src={home} alt="Home logo" /></Link>
        </Navbar>
    )
}

export default Navigation