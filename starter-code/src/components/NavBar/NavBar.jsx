import React, { Component } from 'react'
import { Link, Switch, Route } from "react-router-dom";
import './NavBar.css';


export default class NavBar extends Component {
  render() {
    return (
        <nav className="nav-style">

            <h1><Link to="/">HOME</Link></h1>

      </nav>
    )
  }
}
