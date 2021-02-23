import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="seccion">
        <img src="./img/beers.png" alt="beers" />
        <div>
          <Link to="/beers" className="link">
            All Beers
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </div>
      <div className="seccion">
        <img src="./img/random-beer.png" alt="beers" />
        <div>
          <Link to="/random-beer" className="link">
            Random Beer
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </div>
      <div className="seccion">
        <img src="./img/new-beer.png" alt="beers" />
        <div>
          <Link to="/new-beer" className="link">
            New Beer
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
