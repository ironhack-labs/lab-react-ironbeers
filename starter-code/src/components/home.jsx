import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="main-div">
        <h1>yo this is home</h1>
        <Link to="/new-beer"> Create a new beer/cerveza/birra</Link>
        <Link to="/beers"> See all beers/cervezas/birre</Link>
        <Link to="/random-beer"> Go to a random beer/cerveza/birra</Link>
      </div>
    );
  }
}

export { Home };
