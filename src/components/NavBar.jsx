import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <h1>I'm the navbar</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NavBar;
