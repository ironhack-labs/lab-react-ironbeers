import React from 'react';

import './NavBar.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <nav className="navbar navbar-dark bg-primary d-flex justify-content-center align-items-center p-4">
          <FontAwesomeIcon icon={faHome} size="4x" color="white" />
        </nav>
      </Link>
    </div>
  );
}
