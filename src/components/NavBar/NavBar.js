import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <nav className="App-header">
            <Link to={'/'}>
                <img src="../images/home.png" style={{width: '30px'}} alt="home"/>
            </Link>
        </nav>
    )
}
