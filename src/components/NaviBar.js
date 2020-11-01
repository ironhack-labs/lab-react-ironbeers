import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css';

export default class NaviBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <Link to={'/'}>
          <i className="fas fa-home fa-2x"></i>
        </Link>
      </nav>
    );
  }
}
