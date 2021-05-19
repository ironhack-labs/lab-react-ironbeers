import React from 'react';
import { Link } from 'react-router-dom';

import './HomeLink.css';

export default function HomeLink(props) {
  return (
    <Link to="/" className="home-link">
      <header>⌂</header>
    </Link>
  );
}
