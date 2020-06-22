import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Home(props) {
  return (
    <div>
                <Navbar />
        <img
          src={process.env.PUBLIC_URL + '/images/beers1.png'}
          className="allbeers-image"
          alt="beers"
        />
      <div>
        <NavLink to="/beers">All Beers</NavLink>
      </div>
      <div>
        <NavLink to="/random-beer">Random Beer</NavLink>
      </div>
      <div>
        <NavLink to="/new-beer">New Beers</NavLink>
      </div>
    </div>
  );
}

export default Home;
