import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import beersImg from '../assets/beers.png';


function HomePage() {
  return (
    <>
    <Link to="/beers" className="container" style={{ textDecoration: 'none', color: 'black' }}>
      <div className="card text-center" style={{ width: '18rem'}}>
        <div className="card-body">
          <img src={beersImg} className="card-img-top" alt="Beers" />
          <h5 className="card-title">All beers</h5>
          <p className="card-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </Link>

    <Link to="/random-beer" className="container" style={{ textDecoration: 'none', color: 'black' }}>
      <div className="card text-center" style={{ width: '18rem'}}>
        <div className="card-body">
          <img src="../assets/random-beer.png" className="card-img-top" alt="Random Beer" />
          <h5 className="card-title">Random Beer</h5>
          <p className="card-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </Link>

    <Link to="/new-beer" className="container" style={{ textDecoration: 'none', color: 'black' }}>
      <div className="card text-center" style={{ width: '18rem'}}>
        <div className="card-body">
          <img src="../assets/new-beer.png" className="card-img-top" alt="New Beer"/>
          <h5 className="card-title">New beer</h5>
          <p className="card-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </Link>
    </>
  );
}

export default HomePage;
