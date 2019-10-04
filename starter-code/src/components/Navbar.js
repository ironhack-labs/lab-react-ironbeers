import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <img src="/images/homebar.png" alt="< Go back to Home"></img>
        </Link>
      </div>
    )
  }
}
