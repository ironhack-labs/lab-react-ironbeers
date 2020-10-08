import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>

      <h1>Home page</h1>

      <Link exact to="/beers">
        Beers
      </Link>

      <br />

      <Link exact to="/random-beer">
        Random Beer
      </Link>

      <br />

      <Link exact to="/new-beer">
        New Beer
      </Link>

    </div>
  );
}

export default Homepage;
