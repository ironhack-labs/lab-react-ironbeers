import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import '../App.css';

export default class Home extends Component {


  render() {
   console.log(this.props.path)
    return (
      <nav style={ {display: (this.props.path==="/home" ||this.props.path===undefined)?"none":"block"}}>
       <img src="/home.png" alt="home" />
      </nav>
    )
  }
}
