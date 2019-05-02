import React, { Component } from 'react'
import './Navigator.css';
import { Link } from 'react-router-dom';

export default class Navigator extends Component {
  render() {
    return (
      <div className="nav">
       
        <Link className="link" to='/'> HOME</Link>
      </div>
    )
  }
}
