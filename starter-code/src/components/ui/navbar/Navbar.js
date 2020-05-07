import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {

    return (
      <div className="navbar">
        <Link to="/"><img src="../../../../public/images/home.png" alt="home icon"/></Link>
      </div>
    )
  }
}

export default Navbar;
