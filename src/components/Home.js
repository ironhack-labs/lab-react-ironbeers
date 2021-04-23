import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container min-vw-100 mt-3">
      <Link to="/all-beers">
        <div className="card mb-3 mw-100 text-dark">
          <img
            src={require('../assets/beers.png')}
            className="card-img-top"
            alt="all-beers"
          />
          <div className="card-body">
            <h5 className="card-title">All Beers</h5>
            <p className="card-text">All beers we have in our store.</p>
          </div>
        </div>
      </Link>

      <Link to="/random-beers">
        <div className="card mb-3 mw-100 text-dark">
          <img
            src={require('../assets/random-beer.png')}
            className="card-img-top"
            alt="random-beer"
          />
          <div className="card-body">
            <h5 className="card-title">Random Beer</h5>
            <p className="card-text">Select one random beer.</p>
          </div>
        </div>
      </Link>

      <Link to="/new-beer">
        <div className="card mb-3 mw-100 text-dark">
          <img
            src={require('../assets/new-beer.png')}
            className="card-img-top"
            alt="create-new-beer"
          />
          <div className="card-body">
            <h5 className="card-title">New Beer</h5>
            <p className="card-text">Create a new beer.</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Home;
