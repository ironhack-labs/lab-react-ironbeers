import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/beers">Beers</NavLink>
        <NavLink activeClassName="active" to="/random-beer">Random beer</NavLink>
        <NavLink activeClassName="active" to="/new-beer">New beer</NavLink>
      </nav>
    )
  }
}
