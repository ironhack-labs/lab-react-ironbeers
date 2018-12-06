import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
         <Link to='/Beers'>
                  <h3>Beers</h3>
         </Link>
         <Link to='/RandomBeer'>
                  <h3>Random Beer</h3>
         </Link>
         <Link to='/NewBeer'>
                  <h3>New Beer</h3>
         </Link>
      </div>
    )
  }
}
