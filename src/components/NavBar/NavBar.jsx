import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className="Navbar mb-3">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid d-flex justify-content-center">
            <Link className="navbar-brand" to="/">
             <img src="/assets/home.svg" alt="home icon" style={{'height':'50px'}}/>
            </Link>
          </div>
        </nav>
      </div>
    );
}

export default NavBar