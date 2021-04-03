import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/list-beers">All beers</Link>
      <Link to="/ramdon-beer">Ramdon beer</Link>
      <Link to="/new-beer">New beer</Link>
    </div>
  );
};

export default Home;
