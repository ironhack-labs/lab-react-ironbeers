import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import home from '../../assets/home.png'
import './NavigationBar.css'

export default function NavigationBar() {
    return (
        <div className="bgcolor">
            <NavLink to="/">
                <center>
                    <img className="home-logo" src={home} alt="React Bootstrap logo" />
                </center>
            </NavLink>
        </div>

    )
}
