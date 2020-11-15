import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <button className="btn">
            <NavLink
              to="/beers"
              activeStyle={{ fontWeight: 'bold', color: 'red' }}
            >
              See all the beers
            </NavLink>
          </button>
        </div>
        <div>
        
          <button className="btn">
            <Link to="/random-beer">Random beer</Link>
          </button>
        </div>
        <div>
          <button className="btn">
            <Link to="/new-beer">Add your beer</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
