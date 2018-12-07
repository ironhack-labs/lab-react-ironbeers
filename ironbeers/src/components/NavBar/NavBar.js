import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <h2><Link to="/">Home</Link></h2>
      </div>
    )
  }
}
