import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import NavBar from './../NavBar/NavBar';

export default class RandomBeer extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Random Beer</h1>

      </div>
    )
  }
}
