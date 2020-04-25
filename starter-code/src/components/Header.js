import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/"> <img src="https://img.icons8.com/ios/50/000000/home.png"/> </Link>
      </div>
    )
  }
}
