import React, { Component } from 'react';
import NavBar from './NavBar';

class NewBeer extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <h1>New Beer</h1>
      </div>
    );
  }
}

export default NewBeer;
