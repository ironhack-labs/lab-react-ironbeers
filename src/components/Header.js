import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <Link to="/">🏠</Link>
      </header>
    </div>
  );
}
