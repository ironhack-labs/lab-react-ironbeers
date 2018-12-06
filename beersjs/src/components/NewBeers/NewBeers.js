import React, { Component } from 'react'

import { Link, Switch, Route  } from "react-router-dom";

export default class NewBeers extends Component {

constructor(props) {
  super(props)

  this.state = {
     
  }
}


  render() {
    return (
      <div>
        

        <header> <Link className="navbar-brand" to="/">HOME</Link></header>
        <h1><Link className="navbar-brand" to="/NewBeers">ALL BEERS</Link></h1>
        <h1>NEW BEERS</h1>
      </div>
    )
  }
}
{/* <header> <Link className="navbar-brand" to="/">HOME</Link></header>
        <h1><Link className="navbar-brand" to="/beers">ALL BEERS</Link></h1>
        <h1>BEERS</h1> */}