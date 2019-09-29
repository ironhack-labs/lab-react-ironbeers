import React, { Component } from "react";
import Navbar from "./Navb";

export default class New extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
