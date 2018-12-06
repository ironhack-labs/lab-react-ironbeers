import React, { Component } from 'react'
import { Link, Switch, Route } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">HOME</Link>
      </div>
    )
  }
}
