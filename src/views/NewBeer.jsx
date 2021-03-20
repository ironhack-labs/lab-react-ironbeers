import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewBeer from './../components/NewBeer';

export class newBeer extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <NewBeer />
      </div>
    );
  }
}

export default newBeer;
