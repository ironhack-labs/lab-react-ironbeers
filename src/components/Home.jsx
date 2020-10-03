import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center flex-column">
        <Link to={`/beers`} className="border rounded mx-auto mt-2">
          <img
            className="align-self-center col-12"
            style={{ width: '25em' }}
            src="https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg"
            alt="all beers"
          />
          <p>All Beers</p>
        </Link>
        <Link to={`/random`} className="border rounded mx-auto mt-2">
          <img
            className="align-self-center col-12"
            style={{ width: '25em' }}
            src="https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg"
            alt="all beers"
          />
          <p>Random Beer</p>
        </Link>
        <Link to={`/new-beer`} className="border rounded mx-auto mt-2">
        <img
            className="align-self-center col-12"
            style={{ width: '25em' }}
            src="https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg"
            alt="all beers"
          />
          <p>New Beer</p></Link>
      </div>
    </div>
  );
};

export default Home;
