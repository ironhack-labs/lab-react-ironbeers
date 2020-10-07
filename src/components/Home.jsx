import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col">
          <div className="home">
            <Link
              className="all"
              to="/beers"
              style={{ textDecoration: 'none', color: '#000' }}
            >
              <Card image="../images/all.png" title="All Beers"></Card>
            </Link>
            <Link
              className="random"
              to="/random-beer"
              style={{ textDecoration: 'none', color: '#000' }}
            >
              <Card image="../images/random.png" title="Random Beer"></Card>
            </Link>
            <Link
              className="new"
              to="/new-beer"
              style={{ textDecoration: 'none', color: '#000' }}
            >
              <Card image="../images/new.png" title="New Beer"></Card>
            </Link>
          </div>
        </div>
        <div className="col col-2"></div>
      </div>
    </div>
  );
};

export default Home;
