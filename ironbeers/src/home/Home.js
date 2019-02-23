import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import '../App.css';

export default class Home extends Component {


  render() {
    return (
      <nav style={ {display: (this.props.display.path==="/home")?"none":"block"}}>
        <a href="/">HOME</a>
      </nav>
    )
  }
}
