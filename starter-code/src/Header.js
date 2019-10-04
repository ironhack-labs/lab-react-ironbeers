import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav><Link to="/">
          
          <h1>Go Home</h1>
          
        </Link></nav>
      </div>
    )
  }
}
