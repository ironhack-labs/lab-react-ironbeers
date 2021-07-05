import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>
      </nav>
    </div>
  );
}

export default Header;
