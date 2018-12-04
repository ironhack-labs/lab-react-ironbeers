import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from '../logo.svg';

import "./Header.css";

class Header extends Component {
  render(){
    return(
        <header className="App-header">
          <Link to ="/"><img src={logo} alt="home" className="logo" /></Link>
        </header>
    )
  }
}

export default Header;