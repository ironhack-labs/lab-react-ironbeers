import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Navbar from "../Header/Header";

export default class Allbeers extends Component {
  render() {
    return (
     
      <div>
         <Navbar />
         <p>All beer</p>
      </div>
    )
  }
}
