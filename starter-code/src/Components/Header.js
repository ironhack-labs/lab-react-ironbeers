import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="top-nav">
        <Link className="home-link" to={"/"}>Home</Link>
      </nav>
    )
  }
}
