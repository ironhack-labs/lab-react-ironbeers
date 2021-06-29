import React, { Component } from 'react';
import NavBar from './NavBar';

class RandomBeer extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <h1>Random Beer</h1>
      </div>
    );
  }
}

export default RandomBeer;
