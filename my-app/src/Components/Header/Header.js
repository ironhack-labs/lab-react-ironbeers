import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navBar">
            
           <Link to ="/">hola</Link>
        </nav>
      </div>
    )
  }
}
