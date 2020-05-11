import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="nav">
        <NavLink to="/beers">Beers</NavLink>
        <NavLink to="/random-beer">Random beer</NavLink>
        <NavLink to="/new-beer">New beer</NavLink>
      </div>
    </div>
  );
};

export default Home;
