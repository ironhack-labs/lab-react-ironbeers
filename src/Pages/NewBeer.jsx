import React from 'react';
import { NavLink } from "react-router-dom";
import FormBeer from './../Components/FormBeer'

const NewBeer = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <FormBeer />
    </div>
  )
}

export default NewBeer
