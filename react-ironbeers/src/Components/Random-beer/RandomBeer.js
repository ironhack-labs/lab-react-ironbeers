import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class RandomBeer extends Component {
  render() {
    return (
      <div>
      <div><Link to={`/`}>Home</Link></div>
        random
      </div>
    )
  }
}
