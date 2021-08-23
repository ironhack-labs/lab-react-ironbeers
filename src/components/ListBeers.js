import React from 'react';
import { Link } from 'react-router-dom';

function ListBeers() {
  return (
    <div className="page-content">
      <header>
        <Link to="/" className="home-link">
          Home
        </Link>
      </header>
      <h1>List of beers</h1>
    </div>
  );
}

export default ListBeers;
