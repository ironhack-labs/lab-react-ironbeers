import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to IronBeers</h1>
      <Link to="/allbeers">
        <button>All Beers</button>
      </Link>
      <Link to="/addbeer">
        <button>Add Beer</button>
      </Link>
      <Link to="/randombeer">
        <button>Random Beer</button>
      </Link>
    </div>
  );
}

export default HomePage;

