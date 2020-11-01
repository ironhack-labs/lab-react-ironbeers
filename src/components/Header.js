import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">
        <header className="header-link">
          <img className="header-image" src="/images/home.svg" />
        </header>
      </Link>
    </div>
  );
}
