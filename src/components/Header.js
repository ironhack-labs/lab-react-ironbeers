import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container d-flex justify-content-center">
          <Link className="navbar-brand" to="/">
            <i className="fa fa-home fa-3x"></i>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
