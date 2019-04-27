import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (

      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
      </Link>
      <div className="navbar-item">
              <Link to='/beers'>/beers</Link>
              </div>
              <div className="navbar-item">
              <Link to='/random-beer'>/random-beer</Link></div>
              
              <div className="navbar-item"><Link to='/new-beer'>/new-beer</Link>
            </div>
          </div>
        </div>
      </nav>


    );
  }
}

export default Navbar;