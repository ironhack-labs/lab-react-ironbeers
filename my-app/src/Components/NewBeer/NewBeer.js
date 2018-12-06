import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../Header/Header";

export default class NewBeer extends Component {
  render() {
    return (
      <div>
         <Navbar />
         <p>Soy new beer</p>
      </div>
    )
  }
}
