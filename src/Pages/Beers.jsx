import React from 'react';
import { NavLink } from "react-router-dom";

const Beers = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <h1>All Beers</h1>
    </div>
  )
}

export default Beers
