import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  customNav: {
    backgroundColor: '#4aa192',
    color: '#fff',
  },
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark p-4" style={styles.customNav}>
      <div className="container justify-content-md-center">
        <Link to="/" className="navbar-item">
          <i className="fas fa-home"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
