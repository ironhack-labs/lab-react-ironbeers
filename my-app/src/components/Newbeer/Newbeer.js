import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class newbeer extends Component {
  render() {
    return (
      <div>
        <Link to = "/Newbeers"><h1>New beers</h1></Link>
      </div>
    )
  }
}
