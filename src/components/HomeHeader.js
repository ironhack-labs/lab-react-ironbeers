import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/">Home</Link>
        </div>
      </nav>
    </div>
  );
}
