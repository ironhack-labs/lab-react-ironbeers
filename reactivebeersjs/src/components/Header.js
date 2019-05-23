import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <div className="Header">
       <Link to='/'><img src="../img/house.png" alt="house"></img></Link> 
      </div>
    );
  }
}

export default Header;
