import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class randombeer extends Component {
  render() {
    return (
      <div>
        <Link to = "/Randombeers"><h1>Random beers</h1></Link>
      </div>
    )
  }
}
