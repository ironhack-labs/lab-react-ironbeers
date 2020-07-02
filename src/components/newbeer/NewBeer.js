import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

const NewBeer = () => {
  return (
    <div>
      <header>
       <Link to="/">Home</Link>
      </header>
      <h1>New Beer</h1>
    </div>
  );
};

export default NewBeer;