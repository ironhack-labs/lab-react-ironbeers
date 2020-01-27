import React, { Component } from 'react';
import NavBar from '../NavBar/Navbar'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>oi</h1>
      </div>
    );
  }
}
