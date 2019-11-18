import React, { Component } from 'react'
import './App.css';
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <>
            <div className="navbar"><Link to="/"><img src="/images/home.png" className="Home-icon"/></Link></div>
                
            </>
        )
    }
}

export default Header
