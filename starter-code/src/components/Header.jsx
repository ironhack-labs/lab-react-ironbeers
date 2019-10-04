import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeIcon from './../images/5377641-home-icon-png-transparent-94-images-in-collection-page-1-home-icon-png-900_900.png'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <nav className="header">
       <div><Link to="/" >
            <img src={homeIcon} alt="home"></img>
        </Link></div>
      </nav>
    );
  }
}
