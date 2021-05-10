import React from 'react';
import { Link } from 'react-router-dom';
import imgbeers from '../assets/beers.png';
import imgnewbeer from '../assets/new-beer.png';
import imgrandbber from '../assets/random-beer.png';

export default function StartHomeOnly() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/beers">
            <img src={imgbeers} alt="All Beers" />
          </Link>
          <Link className=" text-decoration-none" to="/beers">
            <h3> All Beers</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col">
          <Link to="/random-beer">
            <img src={imgrandbber} alt="Random Beer" />
          </Link>
          <Link className=" text-decoration-none" to="/random-beer">
            <h3>Random Beer</h3>
          </Link>

          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col">
          <Link to="/new-beer">
            <img src={imgnewbeer} alt="New Beer" />
          </Link>
          <Link className=" text-decoration-none" to="/new-beer">
            <h3>New Beer</h3>
          </Link>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
}
