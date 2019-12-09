import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Beersapi from "../components/Beersapi";

export class Allbeers extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Beersapi />
      </div>
    );
  }
}

export default Allbeers;
