import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Link to="/beers">
        <div className="card">
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget diam augue. Vestibulum viverra metus lorem, sed dictum odio
            suscipit at. Duis vitae iaculis ex. Donec eu hendrerit nisi, eget
            vestibulum massa.
          </p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div className="card">
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget diam augue. Vestibulum viverra metus lorem, sed dictum odio
            suscipit at. Duis vitae iaculis ex. Donec eu hendrerit nisi, eget
            vestibulum massa.
          </p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div className="card">
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget diam augue. Vestibulum viverra metus lorem, sed dictum odio
            suscipit at. Duis vitae iaculis ex. Donec eu hendrerit nisi, eget
            vestibulum massa.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
