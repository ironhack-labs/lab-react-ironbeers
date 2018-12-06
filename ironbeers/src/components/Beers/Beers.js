import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom';

export default class Beers extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
                  <h3>Home</h3>
         </Link>
      </div>
    )
  }
}
