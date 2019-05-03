import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav-style">
        <Link to='/' className="navigation"><i className="fas fa-home" /></Link>
      </nav>
    )
  }
}

export default Navbar;