import React from 'react';
import '../Header/Header.css';
import House from '../../assets/header.png'

const Header = () => {
    return (
        <div className="">
            <nav className="navbar navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={House} alt="" width="300" height="50" className="d-inline-block align-text-top" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header