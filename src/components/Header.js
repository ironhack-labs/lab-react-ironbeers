import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import navImage from '../assets/nav.png';

 class Header extends Component {
  render() {
    return (
      <NavLink to='/' exact>
        <img src={navImage} alt="header"></img>
      </NavLink>
    )
  }
}
export default Header;