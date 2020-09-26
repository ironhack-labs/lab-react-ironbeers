import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>This is my home page</h1>
      <ul>
        <li>
          <Link to="/beers">All beers</Link>
        </li>
        <li>
          <Link to="/beers/random-beer">Random Beer</Link>
        </li>
        <li>
          <Link to="/new-beer">New Beer</Link>
        </li>
      </ul>
    </div>
  );
}
