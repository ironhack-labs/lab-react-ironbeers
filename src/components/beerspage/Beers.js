import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'

const Beers = () => {
  axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(res => {
      console.log(res.data)
  })
  
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