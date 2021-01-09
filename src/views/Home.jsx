import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/beers">
          Beers
        </NavLink>
        <NavLink exact to="/random-beer">
          Random Beer
        </NavLink>
        <NavLink exact to="/new-beer">
          New Beer
        </NavLink>
      </nav>
      <h1>Home page</h1>
    </div>
  );
};
export default Home;
