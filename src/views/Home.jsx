import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>I'm the homeview</h1>

      <Link to="/beers">List of Beers</Link>
      <br />

      <Link to="/random">Random Beer here</Link>
      <br />

      <Link to="/new">New Beer</Link>
    </div>
  );
}

export default Home;
