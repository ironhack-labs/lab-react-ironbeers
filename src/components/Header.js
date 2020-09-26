import React from 'react'
import {Link} from 'react-router-dom'
import 'bulma/css/bulma.css';

export default function Header() {
    return (
            <nav style={{width:'100%', backgroundColor:'lightblue'}} className="navbar-brand">
            <Link className="button is-primary" to={'/'}><span role="img">🏠</span>HOME</Link>
            </nav>
    )
}
