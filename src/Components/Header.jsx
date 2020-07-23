import React, { Component } from 'react';
import '../header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Ironbeers</h1>
        <Link to="/">
          <i className="fas fa-home fa-2x"></i>
        </Link>
      </header>
    );
  }
}
