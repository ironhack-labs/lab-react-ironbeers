import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class NewBeer extends Component {
  render() {
    return (
      <div>
        <h1>New Beer</h1>

        <Link to='/'>Go to home</Link>
      </div>
    )
  }
}
