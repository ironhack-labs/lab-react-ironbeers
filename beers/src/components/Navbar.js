import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const navbar = () => {

  return (

    <nav>
      <ul>
        <li><NavLink to='/beers' exact>Beers</NavLink></li>
        <li><NavLink to='/random-beer' exact>Random beer</NavLink></li>
        <li><NavLink to='/new-beer' exact>New beer</NavLink></li>
      </ul>
    </nav>
  )

}
export default navbar 