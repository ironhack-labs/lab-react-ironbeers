import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">HOME</Link>
          
        </header>
      </div>
    )
  }
}
