import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import house from './web-house-.svg'
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <Link to='/'> <img src={house} alt='House  Logo'/> </Link>
      </div>
    )
  }
}
