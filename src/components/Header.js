import React from 'react';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
            <Link to="/"> 🏠</Link>
       
            </nav>
        </div>
    )
}
