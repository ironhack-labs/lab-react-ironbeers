import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/beers">Beers</Link>
                </li>
                <li>
                    <Link to="/random-beer">Random Beer</Link>
                </li>
                <li>
                    <Link to="/new-beer">New Beer</Link>
                </li>
            </nav>
        </div>
    )
}
