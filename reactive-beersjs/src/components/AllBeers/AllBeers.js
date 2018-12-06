import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import NavBar from './../NavBar/NavBar';

export default class AllBeers extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All Beers</h1>

      </div>
    )
  }
}
