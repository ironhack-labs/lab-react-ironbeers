import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    console.log(Home,'renderizamos home')
    return (
        <div>
      <button><Link to={`/beers`}>All beers</Link> </button>
      <button><Link to={`/random-beer`}>Random beer</Link> </button>
      <button><Link to={`/new-beer`}>New beer</Link> </button>
        </div>
    )
}

export default Home
