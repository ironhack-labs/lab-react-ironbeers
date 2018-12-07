import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <nav className="header">
      <Link className="header-link" to={"/"}>
      HOME
      </Link>
      </nav>
    )
  }
}
