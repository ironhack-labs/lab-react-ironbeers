import React, { Component } from 'react';
import '../header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {

    const title = <h1>Ironbeers</h1>;
    const homeLink = (
      <Link to="/">
        <i className="fas fa-home fa-2x"></i>
      </Link>
    );

    return <header>{this.props.currentPath === '/' ? title : homeLink}</header>;
  }
}
