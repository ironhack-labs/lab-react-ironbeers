import React from 'react';
import { Link } from 'react-router-dom';

function RandomBeer(props) {
  return (
    <div>
      <h1>Random beer</h1>
      <Link to={`/`}>Back home</Link>      
    </div>
  );
}

export default RandomBeer;