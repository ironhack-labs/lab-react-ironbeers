import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 


class Nav extends Component {
    render() {
        return(
            <nav className="beers-nav">
                <Link className='nav-link' to='/'>Home</Link>
            </nav>
        )
    }
}

export default Nav;