import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

const Home = () => {
  return (
    <div>
      <NavLink exact to="/beers">
        All Beers
      </NavLink>
      <LoremIpsum />
      <NavLink exact to="/random-beer">
        Random Beer
      </NavLink>
      <LoremIpsum />
      <NavLink exact to="/new-beer">
        New Beer
      </NavLink>
      <LoremIpsum />
    </div>
  );
};

export default Home;
