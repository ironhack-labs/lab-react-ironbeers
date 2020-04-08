import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../utils/Auth';
import '../stylesheets/Nav.css';

const Navbar = () => {
  let user = getUser();
  return (
    <div className="Nav">
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-menu">
          {user ? (
            <div class="navbar-end">
              <div className="navbar-item">
                <p>welcome {user.username}</p>
              </div>
              <Link className="navbar-item has-text-white" to="/auth/logout">
                logout
              </Link>
              <Link className="navbar-item has-text-white" to="/user/profile">
                profile
              </Link>
            </div>
          ) : (
            <div className="navbar-end">
              <Link className="navbar-item has-text-white" to="/auth/signup">
                Signup
              </Link>
              <Link className="navbar-item has-text-white" to="/auth/home">
                <span className="nav-icon icon">
                  <i className="fas fa-home"></i>
                </span>
              </Link>
              <Link className="navbar-item has-text-white" to="/auth/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
