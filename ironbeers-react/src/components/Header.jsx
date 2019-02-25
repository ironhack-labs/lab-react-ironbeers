import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"


export default class Header extends Component {
  render() {
    return (
      <Link to="/">
        <div className="header">
          <i className="fas fa-home"></i>
        </div>
      </Link>

    )
  }
}
