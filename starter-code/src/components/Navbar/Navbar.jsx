import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/beers">Beers</NavLink>
        <NavLink to="/random-beer">Random beer</NavLink>
        <NavLink to="/new-beer">New beer</NavLink>
      </nav>
    )
  }
}
