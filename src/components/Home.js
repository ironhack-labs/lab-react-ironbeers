import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="App">
      
      <Link to={`/beers`}>All Beers</Link>
      <br />
      <Link to={`/RandomBeer`}>Random Beer</Link>
      <br />
      <Link to={`/NewBeer`}>New Beer</Link>
    </div>
  );
}

export default Home