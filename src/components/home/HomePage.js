import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css';

function HomePage() {
  return (
    <div className="container px-4 py-4">
      <h1>IronBeers</h1>
      <p>
        Welcome to IronBeers! Here you can navigate through multiple beers to
        find the one that suits you better
      </p>
      <p>
        You can choose to see a list of all beers, see a random beer from our
        list or add your own choice of beer!
      </p>
      <div className="container beerBtn my-5">
        <div className="my-4">
          <Link to="/beers">
            <img className="homeimage" src="./images/beer-box.svg" />
            <h4>Beers List</h4>
          </Link>
        </div>
        <div className="my-4">
          <Link to="/randombeer">
            <img className="homeimage" src="./images/glass.svg" />
            <h4>Random Beer</h4>
          </Link>
        </div>
        <div className="my-4">
          <Link to="/newbeer">
            <img className="homeimage" src="./images/hop.svg" />
            <h4>Create your own</h4>
          </Link>
        </div>
      </div>
      <div className="footer">
        <small>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            {' '}
            Freepik{' '}
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {' '}
            www.flaticon.com
          </a>
        </small>
      </div>
    </div>
  );
}

export default HomePage;
