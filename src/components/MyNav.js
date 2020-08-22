import React from 'react';
import {Link} from 'react-router-dom';

export default function MyNav() {
  return (
    <header id="header">
      <Link to="/">
        <img src="../home.png" alt="Home" />
      </Link>
    </header>
  )
}
