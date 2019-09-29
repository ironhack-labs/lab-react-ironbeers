import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/"><p>Home</p></Link>
            </nav>
        )
    }
}

export default Header
