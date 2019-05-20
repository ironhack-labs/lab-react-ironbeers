import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { faHome } from '@fortawesome/free-solid-svg-icons'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
      </nav>
    );
  }
}
