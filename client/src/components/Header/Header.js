import React, { Component } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';



export default class Header extends Component {
  render() {
    return (
      <div className="header">
         <Link to='/' style={{ textDecoration: 'none' }}>
        <i class="fas fa-home"></i>
        </Link>
        

      </div>
    )
  }
}
