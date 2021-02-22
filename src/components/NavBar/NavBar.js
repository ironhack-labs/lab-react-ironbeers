import React from 'react';
import { Link, Route } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Route>
        <Link to="/">
          <p>Home</p>
        </Link>
      </Route>
    </nav>
  );
}
export default NavBar