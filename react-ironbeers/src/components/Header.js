import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (

        <nav className="navbar is-fixed-top has-background-link center">
            <Link to="/">
                <span className="icon has-text-success">
                     <i className="fas fa-home fa-2x" style={{marginTop:10}}></i>
                </span>
            </Link>
        </nav>

);

export default Header;