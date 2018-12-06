

import React, { Component } from 'react'
import { Link, Switch, Route  } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
         <h1><Link className="navbar-brand" to="/beers">ALL BEERS</Link></h1>

         <h1><Link className="navbar-brand" to="/random-beer">RANDOM BEER</Link></h1>

         <h1><Link className="navbar-brand" to="/new-beer">NEW BEER</Link></h1>
      </div>
    )
  }
}
