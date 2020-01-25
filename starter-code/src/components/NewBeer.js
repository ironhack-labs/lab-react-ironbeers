import React, { Component } from 'react';
import Navbar from './Navbar';

class NewBeer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>New Beer</h1>
      </div>
    )
  }
}

export default NewBeer;