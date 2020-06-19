import React from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <ul className="nav">
    <li className="nav-item">
      <Link className="nav-link active" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/beers">All Beers</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/random-beer">Random beer</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/new-beer">Create new</Link>
    </li>
  </ul>

  );
}