import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark Header">
            <div className="container">
                <Link className="navbar-brand" to="/">IronBeers</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to='/beers'>Beers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to='/random-beer'>Random Beer</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to='/new-beer'>New Beer</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
