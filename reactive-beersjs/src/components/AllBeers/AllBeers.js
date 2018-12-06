import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class AllBeers extends Component {
  render() {
    return (
      <div>
        <h1>All Beers</h1>

        <Link to='/'>Go to home</Link>
      </div>
    )
  }
}
