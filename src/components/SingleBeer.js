import React from 'react';
import { Link } from 'react-router-dom';

function SingleBeer() {
  return (
    <div className="page-content">
      <header>
        <Link to="/" className="home-link">
          Home
        </Link>
      </header>
      <h1>Single beer</h1>
    </div>
  );
}

export default SingleBeer;
