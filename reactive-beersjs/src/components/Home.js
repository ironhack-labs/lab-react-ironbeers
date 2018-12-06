import React, { Component } from 'react'
import { Link, Switch, Route } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link className="" to={`/beers`}>BEERS</Link>
        <Link className="" to={`/random-beer`}>RANDOM BEER</Link>
        <Link className="" to={`/new-beer`}>NEW BEER</Link>
      </div>
    )
  }
}
