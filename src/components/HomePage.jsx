import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Link>
      <Link to="/random-beer">
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Link>
      <Link to="/new-beer">
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
