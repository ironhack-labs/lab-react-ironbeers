import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>

      <Link to="/beers">Beers</Link>
      <Link to="/randombeer">find random beer</Link>
      <Link to="/newbeer">add a beer</Link>
    </div>
  );
};

export default Home;
