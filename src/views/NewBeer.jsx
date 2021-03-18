import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class newBeer extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
      </div>
    );
  }
}

export default newBeer;
