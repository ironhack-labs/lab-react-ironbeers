import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends React.Component {
    render() {
        return (
            <header className="nav">
            <Link to="/">
                    <i className="fas fa-home"></i>
            </Link>
            </header>
        )
    }
}


/* export default class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/"><div><img src="/images/home.svg" className="svg" alt="Home Icon" /></div></Link>
            </div>
        )
    }
} */