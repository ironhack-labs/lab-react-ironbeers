import React from 'react';
import { Link } from 'react-router-dom';

function home() {
  const getLinks = () => {
    // All beers link
    const allBeers = (
      <div>
        <img src="/images/beers.png" className="img-fluid" alt=" " />
        <div className="text-left">
          <Link to="/beers">
            <h2>All Beers</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    );
    // random beer link
    const randBeer = (
      <div>
        <img src="/images/random-beer.png" className="img-fluid" alt="" />
        <div className="text-left">
          <Link to="/random-beer">
            <h2> Random Beer </h2>{' '}
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    );
    // new beer
    const newBeer = (
      <div>
        <img src="/images/new-beer.png" className="img-fluid" alt="" />
        <div className="text-left">
          <Link to="/new">
            <h2> New Beer </h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    );

    return (
      <ul className="list-group">
        <li className="list-group-item"> {allBeers} </li>
        <li className="list-group-item"> {randBeer}</li>
        <li className="list-group-item"> {newBeer} </li>
      </ul>
    );
  };

  return <div> {getLinks()} </div>;
}

export default home;
