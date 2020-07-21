import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="./App.js">
          Home
        </Link>
      </div>
    );
  }
}

