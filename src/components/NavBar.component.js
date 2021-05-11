import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar is-info"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to={'/'} className="navbar-item">
              <h1 className="title">Home</h1>
            </Link>
          </div>
        </nav>
        {this.props.children}
      </>
    );
  }
}
