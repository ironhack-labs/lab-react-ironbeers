import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav className="nav-style">
        <ul>
          <li>
            <Link to="/beers" exact activeClassName="beer">
              Beers
            </Link>
          </li>
          <li>
            <Link to="/random-beer" exact activeClassName="beer">
              Random Beer
            </Link>
          </li>
          <li>
            <Link to="/new-beer" exact activeClassName="new-beer">
              New Beer
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
