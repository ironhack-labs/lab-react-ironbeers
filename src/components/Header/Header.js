import React from 'react';
import '../Header/Header.css';
import House from '../../assets/header.png'

const Header = () => {
    return (
        <div className="navbar-header">
            <nav className="navbar-light navbar-expand-lg ">
                <div className="container">
                    <a className="nav-img navbar-brand mx-auto d-block" href="/">
                        <img src={House} alt="" className="align-text-top img-responsive " />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header