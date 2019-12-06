import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3 app-title">
            <div className="container" >
                <a className="navbar-brand" href="/">Home</a>
            </div>
        </nav>
    );
}

export default Navbar;