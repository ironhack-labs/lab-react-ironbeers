import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Link to='/'><img className="home" src={'/home.png'} alt="home"/></Link>
                </header>
            </div>
        )
    }
}

export default Header
