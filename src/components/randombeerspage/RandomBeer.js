import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

const RandomBeer = () => {
  return (
    <div>
      <header>
       <Link to="/">Home</Link>
      </header>
      <h1>Random Beer</h1>
    </div>
  );
};

export default RandomBeer;