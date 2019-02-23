import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <Link to="/" style={{ textDecoration: 'none' }}><i className="fas fa-home"></i></Link>
            </div>
            )
    }
}

export default Header;