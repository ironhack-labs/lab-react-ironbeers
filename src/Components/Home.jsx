import React from 'react';
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';

const Home = () => {
  return (
    <div>
      <h1>IronBeers</h1>
      {/* <img src={beersImage} alt=""/> */}
      <Link to="/beers">All beers</Link>
      <Link to="/random-beer">Random beer</Link>
      <Link to="/new-beer">New beer</Link>
    </div>
  );
};

export default Home;
