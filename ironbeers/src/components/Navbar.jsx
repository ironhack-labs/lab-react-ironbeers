import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink to='/beers'>All Beers</NavLink>
        <NavLink to='/random-beer'>Random Beer</NavLink>
        <NavLink to='/new-beer'>Add a Beer</NavLink>
      </div>
    );
  }
}

export default Navbar;