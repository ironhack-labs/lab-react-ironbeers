import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="App-link">
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
