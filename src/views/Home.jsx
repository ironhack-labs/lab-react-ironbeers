import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink className="test" exact to="/listbeers">
            Beers
          </NavLink>
          <NavLink className="test" exact to="/randombeers">
            Random Beer
          </NavLink>
          <NavLink  className="test" exact to="/beers/create">
            Create Beer
          </NavLink>
        </nav>
        <h1>HOME</h1>
      </div>
    );
  }
}
