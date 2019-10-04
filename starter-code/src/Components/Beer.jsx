import React, { Component } from 'react'
//import { Link } from "react-router-dom";

export default class Beer extends Component {
  constructor(props) {
    super();

    this.state = {
      beer: props.beer
    };
  }
  render() {
    return (
      <div>
        <h1>Hola        </h1>
      </div>
    )
  }
}
