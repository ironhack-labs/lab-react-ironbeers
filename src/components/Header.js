import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">
        Home{' '}
        <span role="img" aria-label="house emoji">
          🏡
        </span>
      </Link>
    </div>
  );
}
