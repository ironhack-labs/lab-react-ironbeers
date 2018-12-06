import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class NewBeer extends Component {
  render() {
    return (
      <div>
      <div><Link to={`/`}>Home</Link></div>
        new
      </div>
    )
  }
}
