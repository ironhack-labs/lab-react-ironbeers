import React, { Component } from 'react'
import './Navigator.css';
import { Link } from 'react-router-dom';
import {logo} from './logo.png'

export default class Navigator extends Component {
  render() {
    return (
      <div className="nav">
       
        <Link className="link" to='/'><div className= 'home'>HOME</div></Link>
      </div>
    )
  }
}
