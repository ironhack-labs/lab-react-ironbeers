import React from 'react';

import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div>
      <Link to="/beers">
        <img src="/assets/beers.png" alt="Image missing" />
        <div>
          <h3>All Beers</h3>
          <p>List all the beers!</p>
        </div>
      </Link>
      <Link to="/random-beer">
        <img src="/assets/random-beer.png" alt="Image missing" />
        <div>
          <h3>Random Beer</h3>
          <p>View a random beer!</p>
        </div>
      </Link>
      <Link to="/new-beer">
        <img src="/assets/new-beer.png" alt="Image missing" />
        <div>
          <h3>New Beer</h3>
          <p>Add your own beer!</p>
        </div>
      </Link>
    </div>
  );
}
