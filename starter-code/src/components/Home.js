import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
         <Link to="/beers">All beers</Link>
         <br></br>
         <Link to="/randomBeer">Random Beer</Link>
         <br></br>
         <Link to="/newBeer">New Beer</Link>
      </div>
    )
  }
}