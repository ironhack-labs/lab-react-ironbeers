import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

const Beers = () => {
  return (
    <div>
      <header>
       <Link to="/">Home</Link>
      </header>
      <ul>
        <li>Beer 1</li>
        <li>Beer 1</li>
        <li>Beer 1</li>
        <li>Beer 1</li>
        <li>Beer 1</li>
      </ul>
    </div>
  );
};

export default Beers;