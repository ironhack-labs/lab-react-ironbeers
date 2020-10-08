import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to='/'>
        <header>Header</header>
      </Link>
    </div>
  );
}

export default Header;
