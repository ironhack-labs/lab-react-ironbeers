import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Main.css";

class Main extends Component {
  render() {
    console.log(this.props.path)
    return (
      <Link to={this.props.path} className="Main">
        <div className="img-div"><img src={this.props.src} alt="img"></img></div>
        <h1>
          {this.props.title}
        </h1>
        <div><p>{this.props.text}</p></div>
      </Link>

    )
  }
}

export default Main;
