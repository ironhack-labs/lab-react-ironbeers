import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="nav-bar">
            <Link to = "/"><img src ="./images/header.png" alt = "header"/></Link>      
            </nav>
        )
    }
}

export default Header