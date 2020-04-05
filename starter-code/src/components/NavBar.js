import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import logo from './home.png'

export class NavBar extends Component {
    render() {
        return (
            <div id="navbar">
                <Link to="/"><img src={logo} alt=""/></Link>
                
            </div>
        )
    }
}

export default NavBar
