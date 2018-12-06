import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class NewBeer extends Component {
  render() {
    return (
      <div>
     <h2><Link to="/">Home</Link></h2>
      </div>
    );
  }
}