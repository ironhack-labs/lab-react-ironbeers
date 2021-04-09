import React from 'react';
import '../Header/Header.css';
import House from '../../assets/header.png'

const Header = () => {
    return (
        <div className="navbar header">
            <nav className="navbar navbar-light navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={House} alt="" className="align-text-top img-responsive" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header