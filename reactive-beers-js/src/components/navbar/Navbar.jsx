import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
            <Link to='/'><span>home</span></Link>
        </nav>
      </React.Fragment>
    )
  }
}
