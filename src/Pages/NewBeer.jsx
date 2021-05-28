import React from 'react';
import { NavLink } from "react-router-dom";

const NewBeer = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <h1>Add a New Beer</h1>
    </div>
  )
}

export default NewBeer
