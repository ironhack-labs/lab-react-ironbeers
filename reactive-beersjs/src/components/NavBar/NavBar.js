import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import image from './home.svg'
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    
    return (
      <div className="NavBar">
        <Link to='/'><img src={image} /></Link>
      </div>
    )
  }
}
