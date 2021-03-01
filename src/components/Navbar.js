import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import homepageIcon from '../assets/house.png'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link  to='/'><img id="navbarIcon" src={homepageIcon} alt="hompage Icon"/></Link>
            </div>
        )
    }
}
