import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
    </nav>
  );
}
