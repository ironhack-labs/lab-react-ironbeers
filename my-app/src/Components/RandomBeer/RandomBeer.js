import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../Header/Header";

export default class RandomBeer extends Component {
  render() {
    return (
      <div>
         <Navbar />
      <h1>Random Beer</h1>
      </div>
    );
  }
}
