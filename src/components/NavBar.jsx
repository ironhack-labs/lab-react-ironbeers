import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="bg-blue-400 flex justify-center ">
        <NavLink to="/">
          <img
            className="h-20 color-white"
            src="https://static.thenounproject.com/png/4932-200.png"
            alt="home"
          ></img>
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
