

import React, { Component } from 'react'
import { Link, Switch, Route  } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
         <h1><Link className="navbar-brand" to="/beers">BEERS</Link></h1>

         <h1><Link className="navbar-brand" to="/randombeer">RANDOM BEER</Link></h1>

         <h1><Link className="navbar-brand" to="/newbeer">NEW BEER</Link></h1>
      </div>
    )
  }
}
