import React, { Component } from 'react'
import { Link, Switch, Route } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link className="" to={`/`}>HOME</Link>
      </div>
    )
  }
}
