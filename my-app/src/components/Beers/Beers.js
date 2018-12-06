import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class beers extends Component {
  render() {
    return (
      <div>
        <Link to = "/Beers"><h1>All beers</h1></Link>
      </div>
    )
  }
}
