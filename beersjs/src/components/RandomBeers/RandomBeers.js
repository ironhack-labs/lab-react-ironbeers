import React, { Component } from 'react'

import { Link, Switch, Route  } from "react-router-dom";

export default class RandomBeers extends Component {

constructor(props) {
  super(props)

  this.state = {
     
  }
}


  render() {
    return (
      <div>
         <header> <Link className="navbar-brand" to="/">HOME</Link></header>
        <h1>RANDOM BEERS</h1>
      </div>
    )
  }
}
