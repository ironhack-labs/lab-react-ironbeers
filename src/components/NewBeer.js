import React from 'react';
import { Link } from 'react-router-dom';

function NewBeer(props) {
  return (
    <div>
      <h1>A new beer</h1>
      <Link to={`/`}>Back home</Link>      
    </div>
  );
}

export default NewBeer;