import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImg from '../assets/logo.png';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark" style={{marginBottom:20}}>
            <Link to='/'><img src={logoImg} width="30" height="30" alt=""/></Link>
                </nav>
                </>
    );
};

export default Header;

