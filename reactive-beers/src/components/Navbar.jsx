import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return(
      <div className="navigator">
        <nav className="nav-decoration">
        <li ><Link to='/'><img src="./icon.png" width="60" height="60"></img></Link></li>
        </nav>
      </div>
    )
  }
}