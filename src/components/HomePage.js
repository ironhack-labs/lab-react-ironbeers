import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div>
        <div className="m-10 text-dark">
          <Link to={'/beers'}>
            <img
              className="img-fluid"
              src="./assets/beers.png"
              alt="Beer taps"
            />
            <div className="mb-500">
              <h1 className="text-dark">All Beers</h1>
              <p className="text-dark text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Link>
        </div>
        <Link to={'/random-beer'}>
          <img
            className="img-fluid"
            src="./assets/random-beer.png"
            alt="Beer taps"
          />
          <h1 className="text-dark">Random Beer</h1>
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Link>
        <Link to={'/new-beer'}>
          <img
            className="img-fluid"
            src="./assets/new-beer.png"
            alt="Beer in a glass"
          />
          <h1 className="text-dark">All Beers</h1>
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Link>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default HomePage;
