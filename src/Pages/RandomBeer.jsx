import React from 'react';
import { NavLink } from "react-router-dom";

const RandomBeer = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <h1>Random Beer</h1>
    </div>
  )
}

export default RandomBeer
