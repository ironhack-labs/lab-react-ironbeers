import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <nav className="Header navbar navbar-dark bg-primary justify-content-center" >

            <Link to='/' >
            <img src="../assets/house-door-fill.svg" alt="Bootstrap" width="32" height="32" />

            </Link>


        </nav>


    )
}
export default Header;