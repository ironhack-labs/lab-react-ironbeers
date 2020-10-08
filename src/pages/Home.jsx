import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="beer-page">
        <Link to="/beers">
          <img src="../images/beers.jpg" alt="beer" />
          <h1>All Beers</h1>
        </Link>
      </div>
      <div className="beer-page">
        <Link to="/random-beer">
          <img src="../images/randomBeer.jpg" alt="beer" />
          <h1>Random Beer</h1>
        </Link>
      </div>
      <div className="beer-page">
        <Link to="/new-beer">
          <img src="../images/newBeer.jpg" alt="beer" />
          <h1>New Beer</h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
