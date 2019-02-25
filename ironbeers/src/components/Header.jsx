import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="Home">
        <Link to="/">
          <img src="../img/header.png"></img>
        </Link>
      </div> 
    )
  }
}